export const getRandomPositiveInteger = (start, end) => {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

// eslint-disable-next-line no-unused-vars
export const checkStringLength = (currentStr, maxLength) => currentStr <= maxLength;
