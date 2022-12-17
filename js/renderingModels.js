import { showBigModel } from './renderBigModel.js';
import { renderFiltering } from './ImgFiltering.js';

const picturesBlock = document.querySelector('.pictures');

export const renderModel = (data) => {
  const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const imgList = document.createDocumentFragment();
  const generateElem = () => {
    picturesBlock.querySelectorAll('.picture').forEach((picture) => picturesBlock.removeChild(picture));
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

export function renderImg(posts) {
  renderModel(posts);
  renderFiltering(posts, renderModel);
}
