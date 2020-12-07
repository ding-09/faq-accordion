const toggleState = (e) => {
  const answer = e.target.nextElementSibling;
  const arrow = e.target.querySelector('span');
  e.target.classList.toggle('active-q');
  answer.classList.toggle('active-ans');
  arrow.classList.toggle('changeArrow');
};

const questions = document.querySelectorAll('.question');

const resetFAQ = () => {;
  const answers = document.querySelectorAll('.answer');
  const arrows = document.querySelectorAll('.down-arrow');

  for (i = 0; i < questions.length; i++) {
    questions[i].classList.remove('active-q');
    answers[i].classList.remove('active-ans');
    arrows[i].classList.remove('changeArrow');
  }
};

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    resetFAQ();
    toggleState(e);
  });
});
