const categories = [
  {
    title: "מוזיקה ובידור",
    clues: [
      { value: 100, prompt: "באיזו שנה יצא הסינגל 'Drivers License' של Olivia Rodrigo?", options: ["2018","2019","2020","2021"], correct: 3, explanation: "'Drivers License' יצא בשנת 2021 והפך ללהיט עולמי." },
      { value: 200, prompt: "איזו זמרת הוציאה את אלבום הבכורה 'When We All Fall Asleep, Where Do We Go?'?", options: ["Billie Eilish","Ariana Grande","Dua Lipa","Lana Del Rey"], correct: 0, explanation: "Billie Eilish הוציאה את האלבום הזה והייתה להצלחה מסחררת." },
      { value: 300, prompt: "מי מבצע את השיר 'Blinding Lights'?", options: ["The Weeknd","Bruno Mars","Justin Bieber","Post Malone"], correct: 0, explanation: "'Blinding Lights' בוצע על ידי The Weeknd." },
      { value: 400, prompt: "מי מכונה 'מלך הפופ'?", options: ["מייקל ג'קסון","אלביס פרסלי","פרינס","מדונה"], correct: 0, explanation: "מייקל ג'קסון מוכר בכינוי 'מלך הפופ'." },
      { value: 500, prompt: "מי הוציא את האלבום 'folklore'?", options: ["Taylor Swift","Billie Eilish","Adele","Lorde"], correct: 0, explanation: "'folklore' שוחרר על ידי Taylor Swift בשנת 2020." }
    ]
  },

  {
    title: "ידע כללי (קשה)",
    clues: [
      { value: 100, prompt: "איזו יסוד כימי בעל המספר האטומי 92?", options: ["ברזל","פלטינום","קלציום","אורניום"], correct: 3, explanation: "האורניום הוא היסוד עם המספר האטומי 92." },
      { value: 200, prompt: "מי ניסח את משוואות המקוול (Maxwell) לתיאור שדה החשמל והמגנטיות?", options: ["ג'יימס קלרק מקסוול","מייקל פאראדיי","ג'יימס ווטסון","אלברט איינשטיין"], correct: 0, explanation: "ג'יימס קלרק מקסוול ניסח את משוואות מקסוול שמאחדות חשמל ומגנטיות." },
      { value: 300, prompt: "באיזו שנה נפלה האימפריה הרומית המערבית לפי המסורת ההיסטורית?", options: ["410","476","1453","330"], correct: 1, explanation: "נפילת האימפריה הרומית המערבית מיוחסת לשנת 476 לספירה." },
      { value: 400, prompt: "מהו הערך המקורב של מספר אוילר 'e' עד שלוש ספרות אחרי הנקודה?", options: ["2.718","3.142","1.618","2.303"], correct: 0, explanation: "e ≈ 2.718 (מספר אוילר)." },
      { value: 500, prompt: "מי פרסם את הספר 'On the Origin of Species' שמתאר את תורת האבולוציה על ידי ברירה טבעית?", options: ["Gregory Mendel","Charles Darwin","Alfred Wallace","Jean-Baptiste Lamarck"], correct: 1, explanation: "צ'ארלס דארווין פרסם את 'On the Origin of Species' ב-1859 והתווה את תורת האבולוציה על ידי ברירה טבעית." }
    ]
  },
  {
    title: "מימס (ממים)",
    clues: [
      { value: 100, prompt: "איזה גזע כלבים הוא 'Doge'?", options: ["שיבה","לברדור","פאג","בולדוג"], correct: 0, explanation: "Doge מבוסס על כלב מסוג Shiba (שיבה) והפך למם פופולרי." },
      { value: 200, prompt: "מהו 'Rickroll' בדרך כלל?", options: ["שיר לימודי","קישור שמוביל לשיר של Rick Astley","אתגר ריקוד","בדיחה על סרט"], correct: 1, explanation: "Rickroll הוא טריק שבו שולחים קישור שמוביל לשיר 'Never Gonna Give You Up' של Rick Astley במקום לתוכן המצופה." },
      { value: 300, prompt: "איך נקרא המם שבו גבר מביט באישה אחרת בזמן שבן זוגתו כועסת?", options: ["Distracted Boyfriend","Two Buttons","Hide the Pain Harold","Success Kid"], correct: 0, explanation: "ה-'Distracted Boyfriend' הפך למם עולמי שמייצג הסחות דעת ורמאות." },
      { value: 400, prompt: "איזה חיה הוא Pepe?", options: ["כלב","חתול","צפרדע","זאב"], correct: 2, explanation: "Pepe הוא צפרדע — הדמות נוצרה כצפרדע על ידי המאייר Matt Furie." },
      { value: 500, prompt: "מהו השם האמיתי של האדם שהתפרסם כמם 'Hide the Pain Harold'?", options: ["István Kovács","Péter Nagy","András Arató","Tamás Horváth"], correct: 2, explanation: "האדם בתמונה הוא András Arató, שהפך לסמל של המם 'Hide the Pain Harold'." }
    ]
  },

  {
    title: "דיסני ופיקסר",
    clues: [
      { value: 100, prompt: "מי ביים את הסרט 'Toy Story'?", options: ["ג'ון לאסטר","פיט דוקטור","אנדרו סטנטון","וולט דיסני"], correct: 0, explanation: "ג'ון לאסטר (John Lasseter) ביים את 'Toy Story'." },
      { value: 200, prompt: "באיזו שנה נוסדה פיקסר כחברה עצמאית?", options: ["1979","1986","1995","2000"], correct: 1, explanation: "פיקסר הוקמה כיחידה עצמאית בשנת 1986." },
      { value: 300, prompt: "מה שמו של המנורה המפורסמת שנמצאת בסמלו של פיקסר?", options: ["Luxo Jr.","Lumi","Pixy","Luxor"], correct: 0, explanation: "המנורה 'Luxo Jr.' הופיעה בקטע הניסיוני של פיקסר והפכה לסמל החברה." },
      { value: 400, prompt: "מי הלחין את הפסקול של 'Up'?", options: ["Michael Giacchino","Randy Newman","Hans Zimmer","John Williams"], correct: 0, explanation: "Michael Giacchino הלחין את הפסקול של 'Up'." },
      { value: 500, prompt: "איזה סרט של פיקסר זכה בפרס אוסקר לסרט האנימציה הטוב ביותר בטקס של 2004 (שנחגג על סרטי 2003)?", options: ["Finding Nemo","The Incredibles","Monsters, Inc.","Toy Story 2"], correct: 0, explanation: "'Finding Nemo' זכה בפרס סרט האנימציה הטוב ביותר בטקס של 2004." }
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
  if (state.players.length === 1) {
    playersEl.style.display = 'grid';
    showPlayersBtn.textContent = 'הסתר שחקנים';
  }
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
  modalAnswer.textContent = clue.explanation || '';
  modalAnswer.hidden = true;
  modal.setAttribute("aria-hidden", "false");

  // image handling
  const imgContainer = document.getElementById('modal-image');
  const imgEl = document.getElementById('modal-img');
  const imgCaption = document.getElementById('modal-img-caption');
  if (clue.image) {
    imgEl.src = clue.image;
    imgEl.alt = clue.imageAlt || clue.prompt;
    imgCaption.innerHTML = `${clue.imageAttribution || ''} <a href="${clue.imageSource || '#'}" target="_blank" rel="noopener">מקור</a>`;
    imgContainer.hidden = false;
  } else {
    imgEl.src = '';
    imgEl.alt = '';
    imgCaption.textContent = '';
    imgContainer.hidden = true;
  }

  renderOptions(clue);
  renderModalActions(clue);
}

function renderOptions(clue) {
  const optsEl = document.getElementById('modal-options');
  optsEl.innerHTML = '';
  if (!clue.options || !clue.options.length) return;

  clue.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.dataset.idx = idx;
    btn.addEventListener('click', (e) => {
      // disable all option buttons
      optsEl.querySelectorAll('button').forEach(b => b.disabled = true);
      const clickedIdx = Number(btn.dataset.idx);
      const correctIdx = Number(clue.correct);

      // reveal explanation
      modalAnswer.hidden = false;
      modalAnswer.textContent = clue.explanation || '';

      // highlight selection and correct answer
      if (clickedIdx === correctIdx) {
        btn.classList.add('correct');
        createConfetti();
      } else {
        btn.classList.add('wrong');
        const correctBtn = optsEl.querySelector(`button[data-idx="${correctIdx}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
      }

      // mark clue used so it can't be selected again
      markUsed(state.active);
    });

    optsEl.appendChild(btn);
  });
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
      btn.addEventListener("click", (e) => {
        const delta = Number(btn.dataset.delta);
        const id = btn.dataset.player;
        updateScore(id, delta);
        markUsed(state.active);
        closeModal();
        if (delta > 0) {
          createConfetti();
        }
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

const showPlayersBtn = document.getElementById("show-players");

// Splash / opening screen elements
const splash = document.getElementById('splash');
const splashInput = document.getElementById('splash-player-name');
const splashAddBtn = document.getElementById('splash-add-player');
const splashPlayersList = document.getElementById('splash-players');
const startGameBtn = document.getElementById('start-game');

// Intro screen elements
const intro = document.getElementById('intro');
const introContinue = document.getElementById('intro-continue');

// Initially: show intro, hide splash
if (intro) {
  intro.setAttribute('aria-hidden','false');
  intro.style.display = 'flex';
}
if (splash) {
  splash.setAttribute('aria-hidden','true');
  splash.style.display = 'none';
}

function renderSplashPlayers() {
  splashPlayersList.innerHTML = '';
  state.players.forEach((p) => {
    const li = document.createElement('li');
    li.className = 'splash-player';
    li.innerHTML = `<span>${p.name}</span><button class="ghost" data-remove="${p.id}">הסר</button>`;
    li.querySelector('button').addEventListener('click', () => {
      removePlayer(p.id);
      renderSplashPlayers();
      startGameBtn.disabled = state.players.length === 0;
    });
    splashPlayersList.appendChild(li);
  });
  startGameBtn.disabled = state.players.length === 0;
}

splashAddBtn.addEventListener('click', () => {
  const name = splashInput.value;
  if (!name.trim()) return;
  addPlayer(name);
  renderSplashPlayers();
  splashInput.value = '';
});

splashInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') splashAddBtn.click(); });

startGameBtn.addEventListener('click', () => {
  if (!state.players.length) { alert('הוסף לפחות שחקן אחד'); return; }
  splash.setAttribute('aria-hidden','true');
  splash.style.display = 'none';
  playersEl.style.display = 'grid';
  addPlayerSection.style.display = 'block';
  showPlayersBtn.textContent = 'הסתר שחקנים';
  renderBoard();
  renderPlayers();
});

// Intro continue handler: hide intro, show splash and play a little confetti
introContinue.addEventListener('click', () => {
  intro.setAttribute('aria-hidden','true');
  intro.style.display = 'none';
  splash.setAttribute('aria-hidden','false');
  splash.style.display = 'flex';
  createConfetti();
});

intro.addEventListener('keydown', (e) => { if (e.key === 'Enter') introContinue.click(); });

addPlayerBtn.addEventListener("click", () => addPlayer(playerNameInput.value));
playerNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPlayer(playerNameInput.value);
});

const addPlayerSection = document.getElementById("add-player-section");

showPlayersBtn.addEventListener("click", () => {
  if (playersEl.style.display === 'none') {
    playersEl.style.display = 'grid';
    addPlayerSection.style.display = 'block';
    showPlayersBtn.textContent = 'הסתר שחקנים';
  } else {
    playersEl.style.display = 'none';
    addPlayerSection.style.display = 'none';
    showPlayersBtn.textContent = 'הצג שחקנים';
  }
});



closeModalBtn.addEventListener("click", closeModal);
skipQuestionBtn.addEventListener("click", closeModal);

resetBtn.addEventListener("click", resetGame);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderBoard();
renderPlayers();

function createConfetti() {
  const colors = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-gold)', '#ffb085', '#ffc47a'];
  const shapes = ['circle', 'square', 'triangle', 'star'];

  // burst of large confetti
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    // random sizing
    const size = Math.floor(Math.random() * 12) + 8;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';

    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
      confetti.style.background = color;
    } else if (shape === 'triangle') {
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = (size/2) + 'px solid transparent';
      confetti.style.borderRight = (size/2) + 'px solid transparent';
      confetti.style.borderBottom = size + 'px solid ' + color;
    } else if (shape === 'star') {
      confetti.style.background = 'radial-gradient(circle at 30% 30%, ' + color + ', transparent 60%)';
      confetti.style.borderRadius = '10%';
      confetti.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    } else {
      confetti.style.background = color;
    }

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = (-10 - Math.random()*10) + 'vh';
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    confetti.style.animationDelay = Math.random() * 0.6 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 7000 + Math.random()*3000);
  }

  // add small sparkles
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 60 + 'vh';
    sparkle.style.animationDelay = Math.random() * 0.6 + 's';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1200 + Math.random()*600);
  }
}



// Trigger confetti on correct answer
// In the modal actions, when correct, call createConfetti();
