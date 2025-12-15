const categories = [
  {
    title: "Tech",
    clues: [
      { value: 200, prompt: "This lightweight markup language powers most README files.", answer: "Markdown" },
      { value: 400, prompt: "A Git command that lists commits with abbreviated hashes.", answer: "git log --oneline" },
      { value: 600, prompt: "Name of the JavaScript runtime built on Chrome's V8 engine.", answer: "Node.js" },
      { value: 800, prompt: "CSS layout model that uses rows and columns without floats.", answer: "CSS Grid" },
      { value: 1000, prompt: "HTTP status code for 'Unauthorized'.", answer: "401" }
    ]
  },
  {
    title: "Science",
    clues: [
      { value: 200, prompt: "The planet known for its prominent rings.", answer: "Saturn" },
      { value: 400, prompt: "Unit used to measure electrical resistance.", answer: "Ohm" },
      { value: 600, prompt: "Process plants use to convert light into energy.", answer: "Photosynthesis" },
      { value: 800, prompt: "Smallest particle that still retains an element's properties.", answer: "Atom" },
      { value: 1000, prompt: "Gas that makes up about 78% of Earth's atmosphere.", answer: "Nitrogen" }
    ]
  },
  {
    title: "Movies",
    clues: [
      { value: 200, prompt: "Director of 'Inception'.", answer: "Christopher Nolan" },
      { value: 400, prompt: "The galaxy-spanning saga featuring the Force.", answer: "Star Wars" },
      { value: 600, prompt: "Animated film with a clownfish searching for his son.", answer: "Finding Nemo" },
      { value: 800, prompt: "Musical set in the city of angels starring Emma Stone and Ryan Gosling.", answer: "La La Land" },
      { value: 1000, prompt: "Film where 'there is no spoon'.", answer: "The Matrix" }
    ]
  },
  {
    title: "General",
    clues: [
      { value: 200, prompt: "Opposite of vertical.", answer: "Horizontal" },
      { value: 400, prompt: "Primary color that is a mix of red and blue.", answer: "Purple" },
      { value: 600, prompt: "Number of continents on Earth.", answer: "Seven" },
      { value: 800, prompt: "Metal attracted by magnets.", answer: "Iron" },
      { value: 1000, prompt: "Language spoken in Brazil.", answer: "Portuguese" }
    ]
  }
];

const playersEl = document.getElementById("players");
const boardEl = document.getElementById("board");
const addPlayerBtn = document.getElementById("add-player");
const playerNameInput = document.getElementById("player-name");
const resetBtn = document.getElementById("reset-game");

const modal = document.getElementById("modal");
const modalCategory = document.getElementById("modal-category");
const modalValue = document.getElementById("modal-value");
const modalQuestion = document.getElementById("modal-question");
const modalAnswer = document.getElementById("modal-answer");
const modalActions = document.getElementById("modal-actions");
const showAnswerBtn = document.getElementById("show-answer");
const closeModalBtn = document.getElementById("close-modal");
const skipQuestionBtn = document.getElementById("skip-question");

const state = {
  players: [],
  used: new Set(),
  active: null
};

function renderPlayers() {
  playersEl.innerHTML = "";
  if (!state.players.length) {
    playersEl.innerHTML = '<p class="muted">Add players to start scoring.</p>';
    return;
  }

  state.players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="player-row">
        <strong>${player.name}</strong>
        <span class="badge">${state.used.size} played</span>
      </div>
      <div class="player-row">
        <span class="score">${player.score}</span>
        <div class="inline" style="gap:6px;flex:none;">
          <button class="ghost" data-delta="-100" data-player="${player.id}">-100</button>
          <button class="ghost" data-delta="100" data-player="${player.id}">+100</button>
        </div>
      </div>
      <button class="ghost" data-remove="${player.id}">Remove</button>
    `;

    card.querySelectorAll("button[data-delta]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const delta = Number(btn.dataset.delta);
        updateScore(player.id, delta);
      });
    });

    const removeBtn = card.querySelector("button[data-remove]");
    removeBtn.addEventListener("click", () => removePlayer(player.id));

    playersEl.appendChild(card);
  });
}

function updateScore(id, delta) {
  const player = state.players.find((p) => p.id === id);
  if (!player) return;
  player.score += delta;
  renderPlayers();
}

function removePlayer(id) {
  state.players = state.players.filter((p) => p.id !== id);
  renderPlayers();
}

function addPlayer(name) {
  if (!name.trim()) return;
  const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  state.players.push({ id, name: name.trim(), score: 0 });
  playerNameInput.value = "";
  renderPlayers();
}

function renderBoard() {
  boardEl.innerHTML = "";
  categories.forEach((category, catIdx) => {
    const column = document.createElement("div");
    column.className = "column";
    const heading = document.createElement("h3");
    heading.textContent = category.title;
    column.appendChild(heading);

    category.clues.forEach((clue, clueIdx) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = `$${clue.value}`;
      const key = `${catIdx}-${clueIdx}`;
      cell.dataset.key = key;
      if (state.used.has(key)) {
        cell.classList.add("used");
      }
      cell.addEventListener("click", () => openClue(catIdx, clueIdx));
      column.appendChild(cell);
    });

    boardEl.appendChild(column);
  });
}

function openClue(catIdx, clueIdx) {
  const key = `${catIdx}-${clueIdx}`;
  if (state.used.has(key)) return;
  state.active = { catIdx, clueIdx };
  const clue = categories[catIdx].clues[clueIdx];

  modalCategory.textContent = categories[catIdx].title;
  modalValue.textContent = `$${clue.value}`;
  modalQuestion.textContent = clue.prompt;
  modalAnswer.textContent = clue.answer;
  modalAnswer.hidden = true;
  modal.setAttribute("aria-hidden", "false");

  renderModalActions(clue);
}

function renderModalActions(clue) {
  modalActions.innerHTML = "";
  if (!state.players.length) {
    modalActions.innerHTML = '<p class="muted">Add players to score this question.</p>';
    return;
  }

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "player-action";
    row.innerHTML = `
      <span>${player.name}</span>
      <button class="ghost" data-player="${player.id}" data-delta="-${clue.value}">Incorrect</button>
      <button data-player="${player.id}" data-delta="${clue.value}">Correct</button>
    `;

    row.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const delta = Number(btn.dataset.delta);
        const id = btn.dataset.player;
        updateScore(id, delta);
        markUsed(state.active);
        closeModal();
      });
    });

    modalActions.appendChild(row);
  });
}

function markUsed(active) {
  if (!active) return;
  const key = `${active.catIdx}-${active.clueIdx}`;
  state.used.add(key);
  renderBoard();
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  state.active = null;
}

function resetGame() {
  state.used.clear();
  state.players.forEach((p) => {
    p.score = 0;
  });
  renderBoard();
  renderPlayers();
  closeModal();
}

addPlayerBtn.addEventListener("click", () => addPlayer(playerNameInput.value));
playerNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPlayer(playerNameInput.value);
});

showAnswerBtn.addEventListener("click", () => {
  modalAnswer.hidden = false;
});

closeModalBtn.addEventListener("click", closeModal);
skipQuestionBtn.addEventListener("click", closeModal);

resetBtn.addEventListener("click", resetGame);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderBoard();
renderPlayers();
