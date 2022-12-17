import { showError, showSuccess } from './messageOutput.js';
const SERVER_LOAD_NAME = 'https://26.javascript.pages.academy/kekstagram/data';
const SERVER_UPLOAD = 'https://26.javascript.pages.academy/kekstagram';
const ERROR_MESSAGE = 'Ошибка загрузки фото!';

const getData = (render) => {
  fetch(SERVER_LOAD_NAME)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showError(ERROR_MESSAGE, `${response.statusText}`);
      return [];
    })
    .then((photos) => render(photos))
    .catch((reason) => showError(ERROR_MESSAGE, `${reason.statusText}`));
};


const sendData = (formData) => {
  fetch(SERVER_UPLOAD,
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 400) {
          showError('Неверный формат файла!');
        } else {
          showError('Данные не отправлены!');
        }
      } else {
        showSuccess();
      }
    })
    .catch((reason) => showError(ERROR_MESSAGE, `${reason.statusText}`));
};

export { getData, sendData };
