const REGEXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

import {checkStringLength} from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtagForm = form.querySelector('.text__hashtags');
const comment = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-errors',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

const validateComment = (value) => checkStringLength(value.length, 140);

const validateHashtags = (hashtags) => {
  if (hashtags.length === 0) {
    return true;
  }
  const separateHashtags = hashtags.split(' ');
  const setHashtags = new Set();
  for (const hashtag of separateHashtags) {
    if (!REGEXP.test(hashtag)) {
      return false;
    }
    const loweredHashtag = hashtag.toLowerCase();
    if (setHashtags.has(loweredHashtag)) {
      return false;
    }
    setHashtags.add(hashtag);
  }
  return setHashtags.size <= 5;
};

pristine.addValidator(comment, validateComment, 'Длина комментария не может составлять больше 140 символов');

pristine.addValidator(hashtagForm, validateHashtags, 'Ошибка! Введите хеш-тег правильно!');

const validateForm = () => pristine.validate();

export {form, hashtagForm as hashtag, comment, validateForm};

