import { showBigModel } from './renderBigModel.js';

export const renderModel = (data) => {
  const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const imgList = document.createDocumentFragment();
  const generateElem = () => {
    for (const post of data) {
      const imageElement = imageTemplate.cloneNode(true);
      imageElement.querySelector('.picture__img').src = post.url;
      imageElement.querySelector('.picture__likes').textContent = post.likes;
      imageElement.querySelector('.picture__comments').textContent = post.comments.length;
      imageElement.addEventListener('click', (evt) => {
        evt.preventDefault();
        showBigModel(post);
      });
      imgList.appendChild(imageElement);
    }
  };
  generateElem();

  document.querySelector('.pictures').appendChild(imgList);
};
