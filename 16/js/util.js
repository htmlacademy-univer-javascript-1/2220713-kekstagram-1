export const getRandomPositiveInteger = (start, end) => {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

export const checkStringLength = (currentStr, maxLength) => currentStr <= maxLength;

export const randomElements = (n, array) => array.sort(() => Math.random() - Math.random()).slice(0, n);

let timeoutId;

export const debounce = (callback, timeoutDelay = 500) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(callback, timeoutDelay);
};

export function throttle(callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
