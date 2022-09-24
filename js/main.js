function randomRangeNum(start, end) {
  if (start === end) {
    return start;
  }
  if (start > end) {
    return Math.floor(Math.random() * (start - end + 1)) + end;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}


const maxLenghStr = (currentStr, maxLength) => currentStr <= maxLength;


randomRangeNum(20, 30);
maxLenghStr('2000', 2);
