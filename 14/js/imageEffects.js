import '../nouislider/nouislider.js';

const changeImgForm = document.querySelector('.img-upload__form');
const slider = changeImgForm.querySelector('.effect-level__slider');
const effectLevel = changeImgForm.querySelector('.effect-level__value');
const imgPrev = changeImgForm.querySelector('.img-upload__preview');

const makeFilterInfo = (filterName, valueUnit) => ({
  filterName: filterName,
  valueUnit: valueUnit,
});

const makeSliderOptions = (min, max, start, step) => ({
  range: {min, max},
  start: start,
  step: step,
  connect: 'lower'
});

const makeEffectInfo = (filterName, filterValueUnit, sliderMin, sliderMax, sliderStart, sliderStep) => ({
  filterInfo: makeFilterInfo(filterName, filterValueUnit),
  sliderOptions: makeSliderOptions(sliderMin, sliderMax, sliderStart, sliderStep)
});

const effectInfos = {
  'chrome': makeEffectInfo('grayscale', '', 0, 1, 0, 0.1),
  'sepia': makeEffectInfo('sepia', '', 0, 1, 0, 0.1),
  'marvin': makeEffectInfo('invert', '%', 0, 100, 0.1, 1),
  'phobos': makeEffectInfo('blur', 'px', 0, 3, 0, 0.1),
  'heat': makeEffectInfo('brightness', '', 1, 3, 1, 0.1)
};

slider.classList.add('hidden');
let currentEffectClass = 'effects__preview--none';
let currentEffectInfo = effectInfos['chrome']; //does not matter, slider is hidden
noUiSlider.create(slider, currentEffectInfo.sliderOptions);

const styleForFilter = (filterInfo, value) => `${filterInfo.filterName}(${value}${filterInfo.valueUnit})`;

const changeEffectClass = (newEffectName) => {
  const newEffectClass = `effects__preview--${newEffectName}`;
  imgPrev.classList.remove(currentEffectClass);
  imgPrev.classList.add(newEffectClass);
  currentEffectClass = newEffectClass;
};

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  const filterInfo = currentEffectInfo.filterInfo;
  imgPrev.style.filter = styleForFilter(filterInfo, value);
  effectLevel.value = value.toString();
});

changeImgForm.addEventListener('change', (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  const newEffect = evt.target.value;
  changeEffectClass(newEffect);
  if (newEffect === 'none') {
    imgPrev.style.filter = 'none';
    slider.classList.add('hidden');
    return;
  }
  currentEffectInfo = effectInfos[newEffect];
  slider.noUiSlider.updateOptions(effectInfos[newEffect].sliderOptions);
  if (slider.classList.contains('hidden')) {
    slider.classList.remove('hidden');
  }
});
