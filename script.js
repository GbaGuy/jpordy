const categories = [
  {
    title: "מוזיקה",
    clues: [
      { value: 100, prompt: "באיזו שנה שוחרר הסינגל 'Blinding Lights' של The Weeknd?", options: ["2017","2018","2019","2020"], correct: 2, explanation: "'Blinding Lights' שוחרר ב־2019 והיה להיט עולמי שמחזיק שיאי הייעוד בטבלאות." },
      { value: 200, prompt: "מהו המושג 'hook' במוזיקה?", options: ["קטע שחוזר במנגינה שמטרתו להיזכר בה","סוג של תו מוזיקלי","מכשיר נגינה","תאוריית מוזיקה"], correct: 0, explanation: "'Hook' הוא חלק שגורם לשיר להידבק בזיכרון המאזין, לרוב פזמון או ריפיטיטיבי מטען." },
      { value: 300, prompt: "איזה אלבום של בילי אייליש זכה בפרס אלבום השנה בגרמי?", options: ["When We All Fall Asleep Where Do We Go?","Happier Than Ever","Don't Smile at Me","Ocean Eyes"], correct: 0, explanation: "'When We All Fall Asleep, Where Do We Go?' זכה במספר פרסי גראמי, כולל אלבום השנה." },
      { value: 400, prompt: "מי נחשב למייסד סגנון המוזיקה ה'רוק אנד רול' ומהכינוי שלו נובע 'מלך הרוק'?", options: ["אלביס פרסלי","בוב דילן","צ'אק ברי","ליטל ריצ'רד"], correct: 2, explanation: "צ'אק ברי נחשב לאחד מאבות הרוק אנד רול בגלל השפעתו על הגיטרה והסגנון; אלביס כונה 'מלך הרוק' מסיבות מסחריות ותרבותיות." },
      { value: 500, prompt: "מהו 'circle of fifths' ומה השימוש שלו בעיבוד מוזיקלי?", options: ["תרשים המציג יחסי מידות וטונים לשימוש בהרמוניה ומודולציות","סוג של שולחן הקשב","טכניקה להקלטת שירה","מכשיר מוזיקלי"], correct: 0, explanation: "'Circle of fifths' מסייע להבין תנועות בין מקומות טונליים, קונספט חשוב בהרמוניה ומודולציות." }
    ]
  },
  {
    title: "אפליקציות ורשתות חברתיות",
    clues: [
      { value: 100, prompt: "באיזו שנה רכשה Facebook את Instagram?", options: ["2010","2012","2014","2016"], correct: 1, explanation: "Facebook רכשה את Instagram בשנת 2012." },
      { value: 200, prompt: "איזו טכנולוגיה מרכזית מאפשרת שידור חי של וידאו ברשתות חברתיות?", options: ["RTMP (Real-Time Messaging Protocol)","FTP","SMTP","HTTP/2"], correct: 0, explanation: "RTMP שימש לאורך זמן לשידורים חיים והזרמות וידאו בזמן אמת לפני שחל שינוי ל-HLS/HTTP-based solutions." },
      { value: 300, prompt: "איזו רשת חברתית הושקה תחילה כפלטפורמה למעקב אחר מיקרו-בלוגינג (ציוצים)?", options: ["Twitter","Instagram","Facebook","Snapchat"], correct: 0, explanation: "Twitter נוצרה כפלטפורמת מיקרו-בלוגינג המבוססת על ציוצים קצרים." },
      { value: 400, prompt: "מהו המונח 'algorithmic feed' וכיצד הוא שינה את חוויית הצפייה ברשתות?", options: ["סדר הצגתו של התוכן לפי המלצות אלגוריתמיות במקום כרונולוגיה","פורמט פרסום בתשלום","כלי עריכת תמונות","מערכת ניהול קבצים"], correct: 0, explanation: "Algorithmic feeds מסדרים תוכן לפי רלוונטיות ועניין צפוי למשתמש ולא רק לפי זמן פרסום." },
      { value: 500, prompt: "מהי תקנת GDPR בקצרה ומדוע היא חשובה לפלטפורמות חברתיות?", options: ["רגולציה להגנת נתונים פרטיים באיחוד האירופי המחייבת שקיפות וסכמות הסכמה","תקן אבטחה פנימי","מנגנון תשלום" ,"פורמט וידאו"], correct: 0, explanation: "GDPR הוא חוק הגנת נתונים שמחייב מדיניות פרטיות ושמירת זכויות הנתונים באיחוד האירופי." }
    ]
  },
  {
    title: "משחקים ודיגיטל",
    clues: [
      { value: 100, prompt: "באיזה שנה יצא המשחק 'Minecraft' בגרסת היציאה הרשמית?", options: ["2009","2011","2013","2015"], correct: 1, explanation: "גרסת היציאה הרשמית של Minecraft יצאה ב-2011." },
      { value: 200, prompt: "איזה משחק השפיע משמעותית על התפשטות ז'אנר ה‑Battle Royale בשוק העולמי בשנת 2017?", options: ["PUBG","Fortnite","Apex Legends","CS:GO"], correct: 0, explanation: "PUBG היה גורם מרכזי ב־2017 להצלחת ז'אנר ה‑Battle Royale." },
      { value: 300, prompt: "מהו מנוע המשחקים 'Unreal Engine' ומאיזו חברה הוא פותח?", options: ["Epic Games","Unity Technologies","Valve","Crytek"], correct: 0, explanation: "Unreal Engine פותח על ידי Epic Games ומהווה מנוע מתקדם לפיתוח משחקים ותוכן אינטראקטיבי." },
      { value: 400, prompt: "איזו שפה נפוצה בפיתוח משחקים חוצי פלטפורמות עם Unity?", options: ["C#","C++","JavaScript","Python"], correct: 0, explanation: "Unity משתמשת ב‑C# כבסיס לכתיבת סקריפטים ופיתוח משחקים." },
      { value: 500, prompt: "מהו מושג 'procedural generation' וכיצד הוא משמש במשחקים?", options: ["יצירת תוכן באופן אלגוריתמי דינמי במקום עיצוב ידני","שיטה לכוונון גרפיקות","יכולת לשדרג חומרה","פורמט רשת"], correct: 0, explanation: "Procedural generation מייצר עולמות, מפות ותוכן באופן אלגוריתמי לחיסכון בזמן פיתוח ולהגדלת גיוון." }
    ]
  },
  {
    title: "מימס (ממים)",
    clues: [
      { value: 100, prompt: "באיזו פלטפורמה צמח המם 'Doge' לקראת הפופולריות שלו?", options: ["Reddit","Facebook","Instagram","TikTok"], correct: 0, explanation: "Doge הפך לויראלי ברשתות כמו Reddit בתחילת שנות ה־2010." },
      { value: 200, prompt: "מה המקור של ה'Rickroll' ומה מטרתו הבסיסית?", options: ["סרטון מוזיקלי שנשלח כהפתעה","מעין קישור מתעתע שמוביל ל'Never Gonna Give You Up'","פרסומת ישנה","סיפור מדע בדיוני"], correct: 1, explanation: "Rickroll הוא מתיחה שמטרתה להטעות משתמשים להקליק קישור שמוביל לשיר של Rick Astley." },
      { value: 300, prompt: "מי יצר את מם 'Pepe the Frog' ובאיזו סדרת קומיקס הופיע לראשונה?", options: ["Matt Furie - 'Boys Club'","Richard Dawkins - 'The Selfish Gene'","KC Green - 'Gunshow'","András Arató - 'Old Photos'"], correct: 0, explanation: "Pepe נוצר על ידי Matt Furie והופיע בסדרת הקומיקס 'Boys Club'." },
      { value: 400, prompt: "מהו 'image macro' וכדאי לציין בתשובה מדוע הוא אפקטיבי כמם?", options: ["תמונה עם טקסט עליון ותחתון שמתקשר באופן קומי","שיר קצר","וידאו בפורמט 4:3","יישום גרפי"], correct: 0, explanation: "Image macro משלב תמונה וטקסט ליצירת מסר קצר ומשמעותי שקל לשתף ולהבין." },
      { value: 500, prompt: "איזו סיבה תרמה להפיכתו של 'Distracted Boyfriend' למם גלובלי לפי חוקרי תרבות אינטרנט?", options: ["הנגישות החזותית והאפשרות לקרוא אותו כמשל למצבים חברתיים שונים","הקשר פוליטי ישיר","חיבור לשיר פופולריאני","שימוש בפורמט טקסטואלי בלבד"], correct: 0, explanation: "העוצמה הויזואלית והניראות ההומוריסטית של התמונה מאפשרת התאמה למצבים רבים ולכן הפכה לויראלית." }
    ]
  },
  {
    title: "דיסני ופיקסר",
    clues: [
      { value: 100, prompt: "באיזו שנה הוקמה חברת דיסני על ידי וולט דיסני ורוי דיסני?", options: ["1923","1930","1940","1955"], correct: 0, explanation: "החברה נוסדה בשנת 1923 ע"י וולט ורוי דיסני." },
      { value: 200, prompt: "איזו טכניקה אנימציה חדשנית מיוחסת לפיקסר בסרט 'Toy Story'?", options: ["אנימציה ממוחשבת תלת־ממדית מלאה","צבעי מים מסורתיים","טכניקת סטופ־מושן","רישום ידני בלבד"], correct: 0, explanation: "'Toy Story' היה אחד מהסרטים הראשונים שהציגו אנימציה ממוחשבת תלת־ממדית באורך מלא." },
      { value: 300, prompt: "מי היה הבמאי הראשי של 'Up' שזכה לשבחי ביקורת רבים?", options: ["Pete Docter","Brad Bird","John Lasseter","Andrew Stanton"], correct: 0, explanation: "Pete Docter ביים את 'Up' ונחשב לבמאי מוביל בפיקסר." },
      { value: 400, prompt: "איזה סרט של פיקסר היה מועמד לפרס אוסקר לסרט הטוב ביותר?", options: ["Up","Toy Story 3","Finding Nemo","Wall-E"], correct: 1, explanation: "'Toy Story 3' ו-'Up' היו מועמדים; Toy Story 3 היה מועמד ל-Best Picture גם כן." },
      { value: 500, prompt: "מהו התהליך של 'rendering' באנימציה ממוחשבת?", options: ["המרת מודל ונתוני סצנה לתמונה או רצף תמונות סופי באמצעות חישובים גרפיים","שיטת ציור ידנית","קונספט לפיתוח דמויות","טכניקת סאונד"], correct: 0, explanation: "Rendering הוא חישוב ההשפעות הגרפיות ליצירת התמונה הסופית מהדאטה התלת־ממדי." }
    ]
  }
];

  {
    title: "דיסני ופיקסר",
    clues: [
      { value: 100, prompt: "מי מבין הבאים הוא המייסד המוכר של חברת דיסני?", options: ["וולט דיסני","ג'ון לאסטר","פיט דוקטור","אנדרו סטנטון"], correct: 0, explanation: "וולט דיסני ייסד את החברה יחד עם אחיו רוי והפך לסמל של אנימציה קלאסית." },
      { value: 200, prompt: "איזו חברה הפיקה את הסרט 'Toy Story' הראשון?", options: ["דיסני","פיקסר","דרימוורקס","אולפן סרטים אחר"], correct: 1, explanation: "'Toy Story' הופק על ידי Pixar והיה לסרט האנימציה הממוחשב הראשון באורך מלא של פיקסר." },
      { value: 300, prompt: "באיזו שנה יצא הסרט 'Toy Story' המקורי?", options: ["1993","1995","1997","1999"], correct: 1, explanation: "'Toy Story' יצא ב-1995 והפך לאבן דרך באנימציה ממוחשבת." },
      { value: 400, prompt: "מי מבין הבאים ביים את הסרט 'Up'?", options: ["פיט דוקטור","ג'ון לאסטר","אנדרו סטנטון","מאט פאלקונר"], correct: 0, explanation: "פיט דוקטור (Pete Docter) היה אחד מבימאי 'Up'." },
      { value: 500, prompt: "איזה סרט של פיקסר היה מועמד לפרס אוסקר לסרט הטוב ביותר (Best Picture)?", options: ["Finding Nemo","Up","Toy Story 2","Monsters, Inc."], correct: 1, explanation: "'Up' היה מועמד לפרס אוסקר לסרט הטוב ביותר ונחשב להישג יוצא דופן עבור סרט אנימציה." }
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
        createFirework(e.clientX, e.clientY);
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
          createFirework(e.clientX, e.clientY);
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
  const colors = ['#ff5c8d', '#4dd0e1', '#ffd166', '#ff8c42', '#a29bfe', '#fd79a8', '#00b894', '#e17055'];
  const shapes = ['circle', 'square', 'triangle'];
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
      confetti.style.backgroundColor = color;
    } else if (shape === 'triangle') {
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = '5px solid transparent';
      confetti.style.borderRight = '5px solid transparent';
      confetti.style.borderBottom = '10px solid ' + color;
    } else {
      confetti.style.backgroundColor = color;
    }
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
  }
}

function createFirework(x, y) {
  const colors = ['#ff5c8d', '#4dd0e1', '#ffd166', '#ff8c42', '#a29bfe'];
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.setProperty('--dx', (Math.random() - 0.5) * 200);
    firework.style.setProperty('--dy', (Math.random() - 0.5) * 200);
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }
}

// Trigger confetti on correct answer
// In the modal actions, when correct, call createConfetti();
