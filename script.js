const categories = [
  {
    title: "טכנולוגיה",
    clues: [
      { value: 200, prompt: "שפת סימון קלה שמניעה את רוב קבצי README.", answer: "מרקדאון" },
      { value: 400, prompt: "פקודת Git שרשימה קומיטים עם גיבובים מקוצרים.", answer: "git log --oneline" },
      { value: 600, prompt: "שם זמן הריצה של JavaScript הבנוי על מנוע V8 של Chrome.", answer: "Node.js" },
      { value: 800, prompt: "מודל פריסה CSS המשתמש בשורות ועמודות ללא floats.", answer: "CSS Grid" },
      { value: 1000, prompt: "קוד סטטוס HTTP עבור 'Unauthorized'.", answer: "401" }
    ]
  },
  {
    title: "מדע",
    clues: [
      { value: 200, prompt: "הכוכב הלכת הידוע בטבעותיו הבולטות.", answer: "סטורן" },
      { value: 400, prompt: "יחידה המשמשת למדידת התנגדות חשמלית.", answer: "אוהם" },
      { value: 600, prompt: "תהליך שצמחים משתמשים בו להמרת אור לאנרגיה.", answer: "פוטוסינתזה" },
      { value: 800, prompt: "החלקיק הקטן ביותר שעדיין שומר על תכונותיו של יסוד.", answer: "אטום" },
      { value: 1000, prompt: "גז המהווה כ-78% מהאטמוספירה של כדור הארץ.", answer: "חנקן" }
    ]
  },
  {
    title: "סרטים",
    clues: [
      { value: 200, prompt: "במאי של 'Inception'.", answer: "כריסטופר נולן" },
      { value: 400, prompt: "הסאגה הגלקטית הכוללת את הכוח.", answer: "מלחמת הכוכבים" },
      { value: 600, prompt: "סרט אנימציה עם דג קלון המחפש את בנו.", answer: "מציאת נמו" },
      { value: 800, prompt: "מוזיקל המתרחש בעיר המלאכים בכיכובם של אמה סטון וריין גוסלינג.", answer: "לה לה לנד" },
      { value: 1000, prompt: "סרט שבו 'אין כף'.", answer: "מטריקס" }
    ]
  },
  {
    title: "כללי",
    clues: [
      { value: 200, prompt: "ההפך מאנכי.", answer: "אופקי" },
      { value: 400, prompt: "צבע ראשי שהוא תערובת של אדום וכחול.", answer: "סגול" },
      { value: 600, prompt: "מספר היבשות בכדור הארץ.", answer: "שבע" },
      { value: 800, prompt: "מתכת המושכת למגנטים.", answer: "ברזל" },
      { value: 1000, prompt: "שפה המדוברת בברזיל.", answer: "פורטוגזית" }
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
    playersEl.innerHTML = '<p class="muted">הוסף שחקנים כדי להתחיל לנקד.</p>';
    return;
  }

  state.players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="player-row">
        <strong>${player.name}</strong>
        <span class="badge">${state.used.size} שוחק</span>
      </div>
      <div class="player-row">
        <span class="score">${player.score}</span>
        <div class="inline" style="gap:6px;flex:none;">
          <button class="ghost" data-delta="-100" data-player="${player.id}">-100</button>
          <button class="ghost" data-delta="100" data-player="${player.id}">+100</button>
        </div>
      </div>
      <button class="ghost" data-remove="${player.id}">הסר</button>
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
    modalActions.innerHTML = '<p class="muted">הוסף שחקנים כדי לנקד שאלה זו.</p>';
    return;
  }

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "player-action";
    row.innerHTML = `
      <span>${player.name}</span>
      <button class="ghost" data-player="${player.id}" data-delta="-${clue.value}">שגוי</button>
      <button data-player="${player.id}" data-delta="${clue.value}">נכון</button>
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
