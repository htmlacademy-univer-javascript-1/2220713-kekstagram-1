const commentsList = document.querySelector('.social__comments');
const mainElem = document.querySelector('.big-picture');
const countComments = document.querySelector('.social__comment-count');
const loadComments = document.querySelector('.comments-loader');
const body = document.querySelector('body');


const closeWindow = () => {
  mainElem.classList.add('hidden');
  body.classList.remove('modal-open');
  countComments.classList.remove('hidden');
  loadComments.classList.remove('hidden');
};

const closeWindowWithEsc = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeWindow();
    document.removeEventListener('keydown', closeWindowWithEsc);
  }
};

const createCommentsList = (comments) => {
  const prevComments = mainElem.querySelectorAll('.social__comment');
  for (const prevComment of prevComments) {
    prevComment.remove();
  }
  for (const comment of comments) {
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
    commentsList.appendChild(listElem);
  }
  countComments.classList.add('hidden');
  loadComments.classList.add('hidden');
};

const changeDataOfPhoto = (imgElem) => {
  document.querySelector('.big-picture__img').querySelector('img').src = imgElem.url;
  document.querySelector('.likes-count').textContent = imgElem.likes;
  document.querySelector('.social__caption').textContent = imgElem.descriptions;
  document.querySelector('.comments-count').textContent = imgElem.comments.length;
  createCommentsList(imgElem.comments);
};

export const showBigModel = (data) => {
  mainElem.classList.remove('hidden');
  body.classList.add('modal-open');
  changeDataOfPhoto(data);
  document.querySelector('#picture-cancel').addEventListener('click', () => {
    closeWindow();
  });
  document.addEventListener('keydown', closeWindowWithEsc);
};
