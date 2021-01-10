// Testing if files are linked
let test = document.getElementById('test');
test.textContent = 'Dice Roll';

let hiddenMessage = document.getElementById('hidden-message');

const showHiddenMessage = () => {
  hiddenMessage.removeAttribute('hidden');
};

const questions = [
  {
    question: 'What player scored the most points in one game?',
    answer: 1936
  },
  {
    question: 'What player has the most career assists?',
    answer: 1962
  },
  {
    question: 'Who won the most career NBA championships as player?',
    answer: 1934
  },
  {
    question: 'What player has the highest career PPG?',
    answer: 1963
  },
  {
    question: 'Most coaching titles?',
    answer: 1945
  },
  {
    question: 'Who is the tallest everyday point guard of all time?',
    answer: 1959
  }
];
