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
const getLikes = () => getRandomPositiveInteger(15, 200);

const getRandomDescription = () => descriptions[getRandomPositiveInteger(0, descriptions.length -1)];

const createComment = () => {
  let message = '';
  const sentencesNumber = getRandomPositiveInteger(1, 2);
  for (let i = 0; i < sentencesNumber; i++) {
    message += `${sentences[getRandomPositiveInteger(0, sentences.length - 1)]} `;
  }
  return {
    id: getRandomPositiveInteger(0, 25000000),
    avatar:  `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: message,
    name: names[getRandomPositiveInteger(0, names.length - 1)],
  };
};

const getPost = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  descriptions: getRandomDescription(),
  likes: getLikes(),
  comments: Array.from({length: getRandomPositiveInteger(1, 4)}, createComment)
});

const generatePosts = () => {
  const posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(getPost(i));
  }
  return posts;
};

function getRandomPositiveInteger(start, end) {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// eslint-disable-next-line no-unused-vars
const checkStringLength = (currentStr, maxLength) => currentStr <= maxLength;

// eslint-disable-next-line no-console
console.log(generatePosts());

