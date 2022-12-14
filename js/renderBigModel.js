const FIRST_FIVE_VALUE = 5;
const commentsList = document.querySelector('.social__comments');
const mainElem = document.querySelector('.big-picture');
const countComments = document.querySelector('.social__comment-count');
const firstcountComments = document.querySelector('.first-comments-count');
const loadComments = document.querySelector('.comments-loader');
const body = document.querySelector('body');
let balanceСounter = 0;
let index = 5;
let currentIndex = 0;
let arrOfComments = [];

const createCommentForList = (comment) => {
  const listElem = document.createElement('li');
  listElem.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = '35';
  img.height = '35';

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;

  listElem.appendChild(img);
  listElem.appendChild(p);
  return listElem;
};

const createCommentsList = () => {
  const comments = arrOfComments;
  if (index === comments.length) {
    return;
  }

  if (comments.length <= FIRST_FIVE_VALUE && balanceСounter === 0) {
    currentIndex = 0;
    index = comments.length;
    firstcountComments.textContent = index;
  }

  if (balanceСounter > 0 && balanceСounter - FIRST_FIVE_VALUE >= 0) {
    index += FIRST_FIVE_VALUE;
    firstcountComments.textContent = index;
    currentIndex += FIRST_FIVE_VALUE;
  }

  if (balanceСounter > 0 && balanceСounter - FIRST_FIVE_VALUE < 0){
    currentIndex = index;
    index = comments.length;
    firstcountComments.textContent = index;
  }

  balanceСounter = comments.length - firstcountComments.textContent;
  for (let i = currentIndex; i < index; i++) {
    const listElem = createCommentForList(comments[i]);
    commentsList.appendChild(listElem);
  }
};

const onClickComments = () => {
  createCommentsList();
  if (index === arrOfComments.length) {
    loadComments.classList.add('hidden');
  }
};

const closeWindow = () => {
  mainElem.classList.add('hidden');
  body.classList.remove('modal-open');
  countComments.classList.remove('hidden');
  loadComments.classList.remove('hidden');
  const prevComments = mainElem.querySelectorAll('.social__comment');
  firstcountComments.textContent = 5;
  balanceСounter = 0;
  index = 5;
  currentIndex = 0;
  arrOfComments = [];
  loadComments.classList.remove('hidden');
  loadComments.removeEventListener('click', onClickComments);
  for (const prevComment of prevComments) {
    prevComment.remove();
  }
};

const closeWindowWithEsc = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeWindow();
    document.removeEventListener('keydown', closeWindowWithEsc);
  }
};

const changeDataOfPhoto = (imgElem) => {
  document.querySelector('.big-picture__img').querySelector('img').src = imgElem.url;
  document.querySelector('.likes-count').textContent = imgElem.likes;
  document.querySelector('.social__caption').textContent = imgElem.descriptions;
  document.querySelector('.comments-count').textContent = imgElem.comments.length;
  createCommentsList();
};

export const showBigModel = (data) => {
  mainElem.classList.remove('hidden');
  body.classList.add('modal-open');
  arrOfComments = data.comments;
  changeDataOfPhoto(data);
  document.querySelector('#picture-cancel').addEventListener('click', () => {
    closeWindow();
  });
  document.addEventListener('keydown', closeWindowWithEsc);
  loadComments.addEventListener('click', onClickComments);
};
