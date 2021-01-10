// Testing if files are linked
// let test = document.getElementById('test');
// test.textContent = 'Dice Roll';

// setup
let hiddenMessage = document.getElementById('hidden-message');
let currentPin = [];
let correctPin;

// Questions
const questions = [
  {
    question: 'What NBA player scored the most points in one game?',
    answer: 'Wilt Chamberlain',
    code: 1936
  },
  {
    question: 'What NBA player has the most career assists?',
    answer: 'John Stockton',
    code: 1962
  },
  {
    question: 'Who won the most career NBA championships as player?',
    answer: 'Bill Russell',
    code: 1934
  },
  {
    question: 'What NBA player has the highest career PPG?',
    answer: 'Michael Jordan',
    code: 1963
  },
  {
    question: 'Most coaching NBA titles?',
    answer: 'Phil Jackson',
    code: 1945
  },
  {
    question: 'Who is the tallest everyday point guard of all time in the NBA?',
    answer: 'Magic Johnson',
    code: 1959
  }
];

// game functions
const showHiddenMessage = () => {
  hiddenMessage.removeAttribute('hidden');
};

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * questions.length);
  return randomNumber;
};

const addNumber = (val) => {
  if (!isNaN(Number(val)) && currentPin.length < 4) {
    currentPin.push(val);
    document.getElementById('screen').textContent = currentPin.join('');
    // console.log(currentPin.join(''));
    // console.log(currentPin.length);
  }
};

const deleteNumber = () => {
  if (currentPin.length) {
    currentPin.pop();
    document.getElementById('screen').textContent = currentPin.join('');
    if (!currentPin.length) {
      document.getElementById('screen').textContent = 0;
    }
    // console.log(currentPin.join(''));
  }
};

const submit = () => {
  if (currentPin.join('') == correctPin) {
    hiddenMessage.removeAttribute('hidden');
    hiddenMessage.textContent =
      'You won! The birth year of ' +
      questions[randomNumber].answer +
      ' was correct.';
  } else {
    console.log('wrong');
  }
};

// start
let gameStart = () => {
  randomNumber = generateRandomNumber();
  document.getElementById('question').textContent =
    questions[randomNumber].question;
  correctPin = questions[randomNumber].code;
  console.log(correctPin);
};

gameStart();
