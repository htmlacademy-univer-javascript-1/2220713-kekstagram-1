const SCALE_STEP = 25;
const DEFAULT_VALUE = 100;

const form = document.querySelector('.img-upload__form');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const zoomInButton = document.querySelector('.scale__control--bigger');
const imgPreview = form.querySelector('.img-upload__preview');
const scaleField = form.querySelector('.img-upload__scale');
const scaleValue = scaleField.querySelector('.scale__control--value');
let value;

const minusScaleValue = () => {
  value = parseInt(scaleValue.value.replace('%'), 10);
  if (value > SCALE_STEP) {
    value -= SCALE_STEP;
    scaleValue.value = `${value}%`;
    imgPreview.style = `transform: scale(${value / 100})`;
  }
};

const plusScaleValue = () => {
  value = parseInt(scaleValue.value.replace('%'), 10);
  if (value < DEFAULT_VALUE) {
    value += SCALE_STEP;
    scaleValue.value = `${value}%`;
    imgPreview.style = `transform: scale(${value / 100})`;
  }
};

zoomOutButton.addEventListener('click', minusScaleValue);
zoomInButton.addEventListener('click', plusScaleValue);
