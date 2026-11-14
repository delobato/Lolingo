const questions = [
  { prompt: '“Good morning”', answers: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hasta luego'], correct: 1 },
  { prompt: '“Thank you”', answers: ['Por favor', 'Perdón', 'Gracias', 'De nada'], correct: 2 },
  { prompt: '“How are you?”', answers: ['¿Cómo estás?', '¿Qué hora es?', '¿Dónde está?', '¿Cómo te llamas?'], correct: 0 }
];
let questionIndex = 0;
let selectedAnswer = null;
let answered = false;
let completed = 0;
const optionsEl = document.querySelector('#options');
const feedbackEl = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-button');

function renderQuestion() {
  const question = questions[questionIndex];
  document.querySelector('#prompt').textContent = question.prompt;
  document.querySelector('#question-count').textContent = `${questionIndex + 1} / ${questions.length}`;
  optionsEl.replaceChildren();
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  selectedAnswer = null;
  answered = false;
  nextButton.disabled = true;
  nextButton.innerHTML = 'Check answer <span>→</span>';
  question.answers.forEach((answer, index) => {
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
  if (!answered) {
    answered = true;
    const correct = selectedAnswer === questions[questionIndex].correct;
    const buttons = optionsEl.querySelectorAll('.answer-option');
    buttons.forEach((button, i) => {
      button.disabled = true;
      if (i === questions[questionIndex].correct) button.classList.add('correct');
      else if (i === selectedAnswer) button.classList.add('wrong');
    });
    feedbackEl.textContent = correct ? '¡Muy bien! That’s right. +10 XP' : `Not quite! The answer is “${questions[questionIndex].answers[questions[questionIndex].correct]}”.`;
    feedbackEl.classList.add(correct ? 'good' : 'try');
    if (correct) document.querySelector('#xp-count').textContent = Number(document.querySelector('#xp-count').textContent) + 10;
    nextButton.innerHTML = questionIndex === questions.length - 1 ? 'Finish lesson <span>✓</span>' : 'Next question <span>→</span>';
    nextButton.disabled = false;
    return;
  }
  completed++;
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    questionIndex = 0;
    renderQuestion();
    feedbackEl.textContent = 'Lesson complete! Great work — practice again anytime.';
    feedbackEl.classList.add('good');
    document.querySelector('#goal-current').textContent = Math.min(3, 1 + Math.floor(completed / questions.length));
    document.querySelector('#goal-progress').style.width = `${Math.min(100, 34 + Math.floor(completed / questions.length) * 33)}%`;
    document.querySelector('#practice-title').textContent = 'Nice work! One more?';
    document.querySelector('#question-count').textContent = '✓ done';
  }
});

renderQuestion();
