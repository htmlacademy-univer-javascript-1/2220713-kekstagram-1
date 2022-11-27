export const renderModel = function(data) {
  const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const imgList = document.createDocumentFragment();

  data.forEach(({url, likes, comments}) => {
    const imageElement = imageTemplate.cloneNode(true);
    imageElement.querySelector('.picture__img').src = url;
    imageElement.querySelector('.picture__likes').textContent = likes;
    imageElement.querySelector('picture__comments').textContent = comments;
    imgList.appendChild(imageElement);
  });

  document.querySelector('.pictures').appendChild(imgList);
};

renderModel();
