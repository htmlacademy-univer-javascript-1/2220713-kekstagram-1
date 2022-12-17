import {form, hashtag, comment, validateForm} from './uploadImgValidation.js';
import { sendData } from './loadData.js';
import { uploadFiles } from './uploadFile.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonClose = document.querySelector('#upload-cancel');
const scaleValue = document.querySelector('.scale__control--value');

const closeWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  hashtag.value = '';
  comment.value = '';
};

const closeWindowWithEsc = (evt) => {
  if (evt.code === 'Escape' && !(evt.target.matches('input[name="hashtags"]')) && !(evt.target.matches('textarea[name="description"]'))) {
    evt.preventDefault();
    document.removeEventListener('keydown', closeWindowWithEsc);
    closeWindow();
  }
};

buttonClose.addEventListener('click', () => {
  closeWindow();
});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleValue.value = '100%';
  uploadFiles(uploadFile.files[0]);
  document.addEventListener('keydown', (evt) => {
    closeWindowWithEsc(evt);
  });
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!validateForm()) {
    return;
  }
  sendData(new FormData(evt.target));
  closeWindow();
});
