const translations = {
  en: {
    menu:'MENU',home:'Home',myLearning:'My learning',activity:'Activity',streakTitle:'Keep your streak alive!',streakCopy:'A little practice goes a long way.',guest:'Guest learner',signInSave:'Sign in to save progress',interfaceLanguage:'Interface language',greeting:'Hola, learner',dayStreak:'day streak',heroLine1:'Small steps.',heroLine2:'Big hola energy.',heroCopy:"You're building a brilliant habit. Ready for today's little win?",continueLearning:'Continue learning',letsGo:"Let's go!",dailyGoal:'YOUR DAILY GOAL',lessons:'lessons',learningDirection:'YOUR LEARNING DIRECTION',chooseDirection:'Choose which language you want to practice.',learnSpanish:'I speak English · Learn Spanish',learnEnglish:'Hablo español · Aprende inglés',pickUp:'PICK UP WHERE YOU LEFT OFF',learningPath:'Your learning path',viewAll:'View all',unitOne:'UNIT 1',basics:'THE BASICS',pathTitle:'First conversations',pathCopy:'Say hello, introduce yourself, and make a great first impression.',pathProgress:'0 of 5 lessons',dailyPractice:'A QUICK DAILY PRACTICE',miniLesson:'Your mini lesson',twoMin:'2 MIN',wordOfDay:'WORD OF THE DAY',howToSay:'How do you say...',tapAnswer:'Tap an answer to check it',checkAnswer:'Check answer',onRoll:"YOU'RE ON A ROLL",thisWeek:'This week',doingGreat:"You're doing great!",daysPracticed:'days practiced',littleTip:'A LITTLE TIP',sayIt:'Say it out loud!',tipCopy:'Speaking new words helps them stick. Go on, give it a try.',learning:"YOU'RE LEARNING",yourLevel:'Your level',beginner:'Beginner',madeFor:'Made for curious minds',oneWord:'One word at a time.',saveJourney:'SAVE YOUR JOURNEY',welcomeLolingo:'Welcome to Lolingo',loginCopy:'Create an account to keep your lessons, streak, and progress safe.',emailAddress:'Email address',password:'Password',createAccount:'Create free account',demoNotice:'Demo only: account sign-in is not connected yet. Your practice stays on this device.',promptLabel:'How do you say...',correct:'¡Muy bien! That’s right. +10 XP',incorrect:'Not quite! The answer is',nextQuestion:'Next question',finishLesson:'Finish lesson',lessonComplete:'Lesson complete! Great work — practice again anytime.',restartLesson:'Practice again',signedInDemo:'Demo account created. Progress is saved on this device.',signInRequired:'Enter a valid email and a password with at least 6 characters.'
  },
  es: {
    menu:'MENÚ',home:'Inicio',myLearning:'Mi aprendizaje',activity:'Actividad',streakTitle:'¡Mantén tu racha!',streakCopy:'Un poco de práctica hace mucho.',guest:'Estudiante invitado',signInSave:'Inicia sesión para guardar tu avance',interfaceLanguage:'Idioma de la interfaz',greeting:'Hola, estudiante',dayStreak:'días seguidos',heroLine1:'Paso a paso.',heroLine2:'¡Cada día sabes más!',heroCopy:'Estás creando un gran hábito. ¿Listo para tu pequeño logro de hoy?',continueLearning:'Continuar aprendiendo',letsGo:'¡Vamos!',dailyGoal:'TU META DIARIA',lessons:'lecciones',learningDirection:'TU IDIOMA DE APRENDIZAJE',chooseDirection:'Elige el idioma que quieres practicar.',learnSpanish:'Hablo inglés · Aprender español',learnEnglish:'Hablo español · Aprender inglés',pickUp:'CONTINÚA DONDE LO DEJASTE',learningPath:'Tu ruta de aprendizaje',viewAll:'Ver todo',unitOne:'UNIDAD 1',basics:'LO BÁSICO',pathTitle:'Primeras conversaciones',pathCopy:'Saluda, preséntate y causa una gran primera impresión.',pathProgress:'0 de 5 lecciones',dailyPractice:'UNA PRÁCTICA RÁPIDA',miniLesson:'Tu mini lección',twoMin:'2 MIN',wordOfDay:'PALABRA DEL DÍA',howToSay:'¿Cómo se dice...',tapAnswer:'Toca una respuesta para comprobarla',checkAnswer:'Comprobar',onRoll:'VAS POR BUEN CAMINO',thisWeek:'Esta semana',doingGreat:'¡Lo estás haciendo genial!',daysPracticed:'días de práctica',littleTip:'UN CONSEJITO',sayIt:'¡Dilo en voz alta!',tipCopy:'Decir las palabras nuevas ayuda a recordarlas. ¡Anímate a probar!',learning:'ESTÁS APRENDIENDO',yourLevel:'Tu nivel',beginner:'Principiante',madeFor:'Hecho para mentes curiosas',oneWord:'Una palabra a la vez.',saveJourney:'GUARDA TU AVANCE',welcomeLolingo:'Te damos la bienvenida a Lolingo',loginCopy:'Crea una cuenta para guardar tus lecciones, racha y progreso.',emailAddress:'Correo electrónico',password:'Contraseña',createAccount:'Crear cuenta gratis',demoNotice:'Solo demostración: el inicio de sesión aún no está conectado. Tu práctica se guarda en este dispositivo.',promptLabel:'¿Cómo se dice...',correct:'¡Muy bien! Es correcto. +10 XP',incorrect:'No exactamente. La respuesta es',nextQuestion:'Siguiente pregunta',finishLesson:'Terminar lección',lessonComplete:'¡Lección completada! Muy bien — puedes practicar de nuevo cuando quieras.',restartLesson:'Practicar de nuevo',signedInDemo:'Cuenta de demostración creada. Tu progreso se guarda en este dispositivo.',signInRequired:'Escribe un correo válido y una contraseña de al menos 6 caracteres.'
  }
};

const courseContent = {
  es: {
    name: { en:'Spanish', es:'español' }, flag:'🇪🇸', code:'ES', hello:'¡Hola!', greeting:'¡Vamos!', journey:{ en:'YOUR SPANISH JOURNEY', es:'TU CAMINO EN ESPAÑOL' },
    questions:[
      { prompt:{en:'“Good morning”',es:'“Buenos días”'}, answers:{en:['Buenas noches','Buenos días','Buenas tardes','Hasta luego'],es:['Good night','Good morning','Good afternoon','See you later']}, correct:1 },
      { prompt:{en:'“Thank you”',es:'“Gracias”'}, answers:{en:['Por favor','Perdón','Gracias','De nada'],es:['Please','Sorry','Thank you','You’re welcome']}, correct:2 },
      { prompt:{en:'“How are you?”',es:'“¿Cómo estás?”'}, answers:{en:['¿Cómo estás?','¿Qué hora es?','¿Dónde está?','¿Cómo te llamas?'],es:['How are you?','What time is it?','Where is it?','What’s your name?']}, correct:0 }
    ]
  },
  en: {
    name:{en:'English',es:'inglés'}, flag:'🇺🇸', code:'EN', hello:'Hello!', greeting:"Let's go!", journey:{en:'YOUR ENGLISH JOURNEY',es:'TU CAMINO EN INGLÉS'},
    questions:[
      { prompt:{en:'“Buenos días”',es:'“Good morning”'}, answers:{en:['Good night','Good morning','Good afternoon','See you later'],es:['Buenas noches','Buenos días','Buenas tardes','Hasta luego']}, correct:1 },
      { prompt:{en:'“Gracias”',es:'“Thank you”'}, answers:{en:['Please','Sorry','Thank you','You’re welcome'],es:['Por favor','Perdón','Gracias','De nada']}, correct:2 },
      { prompt:{en:'“¿Cómo estás?”',es:'“How are you?”'}, answers:{en:['How are you?','What time is it?','Where is it?','What’s your name?'],es:['¿Cómo estás?','¿Qué hora es?','¿Dónde está?','¿Cómo te llamas?']}, correct:0 }
    ]
  }
};

const stored = (key, fallback) => { try { const value = localStorage.getItem(key); return value === null ? fallback : value; } catch { return fallback; } };
let uiLanguage = stored('lolingo-ui-language','en') === 'es' ? 'es' : 'en';
let course = stored('lolingo-course','es') === 'en' ? 'en' : 'es';
let questionIndex = 0;
let selectedAnswer = null;
let answered = false;
let completedQuestions = 0;
let totalXP = Number(stored('lolingo-xp','120')) || 120;
let lessonsDone = Number(stored('lolingo-lessons','0')) || 0;
const $ = selector => document.querySelector(selector);
const optionsEl = $('#options');
const feedbackEl = $('#feedback');
const nextButton = $('#next-button');

function save(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Local storage may be disabled. */ } }
function t(key) { return translations[uiLanguage][key]; }
function renderTranslations() {
  document.documentElement.lang = uiLanguage;
  document.title = uiLanguage === 'es' ? 'Lolingo — Aprende un poquito cada día' : 'Lolingo — Learn a little every day';
  document.querySelectorAll('[data-i18n]').forEach(node => { const key = node.dataset.i18n; if (translations[uiLanguage][key]) node.textContent = translations[uiLanguage][key]; });
  $('#ui-language').value = uiLanguage;
  $('#journey-label').textContent = courseContent[course].journey[uiLanguage];
  $('#hello-bubble').textContent = courseContent[course].hello;
  $('#hero-greeting').textContent = courseContent[course].greeting;
  $('#book-language').textContent = courseContent[course].code;
  $('#course-name').textContent = courseContent[course].name[uiLanguage];
  $('#course-flag').textContent = courseContent[course].flag;
  document.querySelectorAll('.direction-button').forEach(button => {
    const active = button.dataset.course === course;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderQuestion();
}
function renderQuestion() {
  const question = courseContent[course].questions[questionIndex];
  $('#prompt').textContent = question.prompt[uiLanguage];
  $('.prompt-label').textContent = t('promptLabel');
  $('#question-count').textContent = `${questionIndex + 1} / ${courseContent[course].questions.length}`;
  optionsEl.replaceChildren();
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  selectedAnswer = null;
  answered = false;
  nextButton.disabled = true;
  nextButton.innerHTML = `<span>${t('checkAnswer')}</span> <span>→</span>`;
  question.answers[uiLanguage].forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.type = 'button';
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(index));
    optionsEl.append(button);
  });
}
function selectAnswer(index) {
  if (answered) return;
  selectedAnswer = index;
  optionsEl.querySelectorAll('.answer-option').forEach((button, i) => button.classList.toggle('selected', i === index));
  nextButton.disabled = false;
}
nextButton.addEventListener('click', () => {
  if (selectedAnswer === null) return;
  const questions = courseContent[course].questions;
  if (!answered) {
    answered = true;
    const correct = selectedAnswer === questions[questionIndex].correct;
    optionsEl.querySelectorAll('.answer-option').forEach((button, i) => {
      button.disabled = true;
      if (i === questions[questionIndex].correct) button.classList.add('correct');
      else if (i === selectedAnswer) button.classList.add('wrong');
    });
    feedbackEl.textContent = correct ? t('correct') : `${t('incorrect')} “${questions[questionIndex].answers[uiLanguage][questions[questionIndex].correct]}”.`;
    feedbackEl.classList.add(correct ? 'good' : 'try');
    if (correct) { totalXP += 10; $('#xp-count').textContent = totalXP; save('lolingo-xp',totalXP); }
    nextButton.innerHTML = `<span>${questionIndex === questions.length - 1 ? t('finishLesson') : t('nextQuestion')}</span> <span>${questionIndex === questions.length - 1 ? '✓' : '→'}</span>`;
    return;
  }
  completedQuestions++;
  if (questionIndex < questions.length - 1) { questionIndex++; renderQuestion(); return; }
  lessonsDone++;
  save('lolingo-lessons',lessonsDone);
  $('#goal-current').textContent = Math.min(3,lessonsDone);
  $('#goal-progress').style.width = `${Math.min(100,lessonsDone * 33.333)}%`;
  $('#practice-days').textContent = Math.min(7,Math.max(1,lessonsDone));
  $('.path-progress-row small').textContent = `${Math.min(5,lessonsDone)} of 5 lessons`;
  $('.mini-track span').style.width = `${Math.min(100,lessonsDone * 20)}%`;
  $('#practice-title').textContent = t('lessonComplete');
  questionIndex = 0;
  renderQuestion();
  feedbackEl.textContent = t('lessonComplete');
  feedbackEl.classList.add('good');
  $('#practice-title').textContent = t('miniLesson');
  $('#question-count').textContent = t('restartLesson');
});
$('.direction-switch').addEventListener('click', event => {
  const button = event.target.closest('[data-course]');
  if (!button || button.dataset.course === course) return;
  course = button.dataset.course;
  questionIndex = 0;
  save('lolingo-course',course);
  renderTranslations();
});
$('#ui-language').addEventListener('change', event => {
  uiLanguage = event.target.value;
  save('lolingo-ui-language',uiLanguage);
  renderTranslations();
});

const modal = $('#login-modal');
const emailInput = $('#email');
$('#open-login').addEventListener('click', () => { modal.hidden = false; emailInput.focus(); });
$('.modal-close').addEventListener('click', () => { modal.hidden = true; });
modal.addEventListener('click', event => { if (event.target === modal) modal.hidden = true; });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) modal.hidden = true; });
$('#login-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) { $('#login-status').textContent = t('signInRequired'); return; }
  const email = emailInput.value.trim();
  const name = email.split('@')[0] || t('guest');
  $('.profile-button strong').textContent = name;
  $('.profile-button small').textContent = uiLanguage === 'es' ? 'Progreso guardado en este dispositivo' : 'Progress saved on this device';
  $('#login-status').textContent = t('signedInDemo');
  save('lolingo-learner',name);
  form.reset();
});

$('#xp-count').textContent = totalXP;
$('#goal-current').textContent = Math.min(3,lessonsDone);
$('#goal-progress').style.width = `${Math.min(100,lessonsDone * 33.333)}%`;
$('#practice-days').textContent = Math.min(7,lessonsDone);
if (lessonsDone > 0) {
  $('.path-progress-row small').textContent = `${Math.min(5,lessonsDone)} of 5 lessons`;
  $('.mini-track span').style.width = `${Math.min(100,lessonsDone * 20)}%`;
}
const savedLearner = stored('lolingo-learner','');
if (savedLearner) { $('.profile-button strong').textContent = savedLearner; $('.profile-button small').textContent = uiLanguage === 'es' ? 'Progreso guardado en este dispositivo' : 'Progress saved on this device'; }
renderTranslations();
