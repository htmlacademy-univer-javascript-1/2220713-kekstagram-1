const names = [
  'Максим',
  'Иван',
  'Анатолий',
  'Исмаил',
  'Эдуард',
  'Виктор',
  'Юлия',
  'Памфил',
  'Юлиан'
];

const descriptions = [
  'Очень красивая фотография',
  'Очень не красивая фотография',
  'Красивая фотография',
  'Некрасивая фотография',
  'Фотография бомба',
];

const sentences = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];

const photosPattern = 'photos/{{i}}.jpg';

const avatarPattern = 'img/avatar-{{случайное число от 1 до 6}}.svg';


const createComment = () => {
  let message = '';
  const sentencesNumber = getRandomPositiveInteger(1, 2);
  for (let i = 0; i < sentencesNumber; i++) {
    message += `${randomArrayElement(sentences)} `;
  }
  return {
    id: getRandomPositiveInteger(0, 25000000),
    avatar: stringByPattern(avatarPattern, getRandomPositiveInteger(1, 6)),
    message: message,
    name: randomArrayElement(names),
  };
};

const createComments = () => {
  const comments = [];
  const commentsNumber = getRandomPositiveInteger(1, 3);
  for (let i = 0; i < commentsNumber; i++) {
    comments[i] = createComment();
  }
  return comments;
};

const createUser = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: stringByPattern(photosPattern, getRandomPositiveInteger(1, 25)),
  description: randomArrayElement(descriptions),
  likes: getRandomPositiveInteger(15, 200),
  comments: createComments()
});

function stringByPattern(pattern, i) {
  const leftBracket = pattern.indexOf('{');
  const rightBracket = pattern.lastIndexOf('}');
  return pattern.substring(0, leftBracket) + i + pattern.substring(rightBracket + 1, pattern.length);
}


function getRandomPositiveInteger(start, end) {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function randomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}


// eslint-disable-next-line no-unused-vars
const checkStringLength = (currentStr, maxLength) => currentStr <= maxLength;

// eslint-disable-next-line no-console
console.log(createUser());

