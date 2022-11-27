import { showBigModel } from './renderBigModel.js';

export const renderModel = (data) => {
  const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const imgList = document.createDocumentFragment();
  const generateElem = () => {
    for (let i = 0; i < data.length; i++) {
      const imageElement = imageTemplate.cloneNode(true);
      imageElement.querySelector('.picture__img').src = data[i].url;
      imageElement.querySelector('.picture__likes').textContent = data[i].likes;
      imageElement.querySelector('.picture__comments').textContent = data[i].comments.length;
      imageElement.addEventListener('click', (evt) => {
        evt.preventDefault();
        showBigModel(data[i]);
      });
      imgList.appendChild(imageElement);
    }
  };
  generateElem();

  document.querySelector('.pictures').appendChild(imgList);
};
