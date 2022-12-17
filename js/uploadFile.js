const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');
const photoEffectsPreview = document.querySelectorAll('.effects__preview');

const uploadFiles = (pictureFile) => {
  const matches = FILE_TYPES.some((extension) => pictureFile.name.toLowerCase().endsWith(extension));

  if (matches) {
    const pictureUrl = URL.createObjectURL(pictureFile);
    photoPreview.src = pictureUrl;
    photoEffectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url(${pictureUrl})`;
    });
  }
};

export{uploadFiles};
