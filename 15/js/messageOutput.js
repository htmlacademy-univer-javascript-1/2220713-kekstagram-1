const errorTemplate = document.querySelector('#error').content.querySelector('section');
const successTemplate = document.querySelector('#success').content.querySelector('section');

const errorBlock = errorTemplate.cloneNode(true);
const successBlock = successTemplate.cloneNode(true);

const errorMessage = errorBlock.querySelector('.error__title');
const errorReason = errorBlock.querySelector('.error__reason');

const closeErrorBtn = errorBlock.querySelector('.error__button');
const closeSuccessBtn = successBlock.querySelector('.success__button');

document.body.append(errorBlock);
document.body.append(successBlock);

const closeBlock = (block) => {
  block.classList.add('hidden');
};

const closeBlockWithEsc = (evt, block) => {
  if (evt.code === 'Escape') {
    document.removeEventListener('keydown', closeBlockWithEsc);
    closeBlock(block);
  }
};

const closeWithClick = (evt, block) => {
  if (!evt.target.matches('h2') && !evt.target.matches('button[type="button"]' &&
  !evt.target.matches('h3'))) {
    document.removeEventListener('click', closeWithClick);
    closeBlock(block);
  }
};

closeErrorBtn.addEventListener('click', () => {
  errorBlock.classList.add('hidden');
});

closeSuccessBtn.addEventListener('click', () => {
  successBlock.classList.add('hidden');
});

export const showError = (message, reason) => {
  errorBlock.classList.remove('hidden');
  errorMessage.textContent = message;
  errorReason.textContent = reason === undefined ? '' : reason;
  document.addEventListener('keydown', (evt) => {
    closeBlockWithEsc(evt, errorBlock);
  });
  document.addEventListener('click', (evt) => {
    closeWithClick(evt, errorBlock);
  });
};

export const showSuccess = () => {
  successBlock.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    closeBlockWithEsc(evt, successBlock);
  });
  document.addEventListener('click', (evt) => {
    closeWithClick(evt, successBlock);
  });
};


