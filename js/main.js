function getRandomPositiveInteger(start, end) {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}


const checkStringLength = (currentStr, maxLength) => currentStr <= maxLength;


getRandomPositiveInteger(20, 30);
checkStringLength('2000', 2);
