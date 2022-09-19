function randomRangeNum(start, end) {
  if (start >= end) {
    return Math.floor(Math.random() * (start - end)) + end;
  }
  return Math.floor(Math.random() * (end - start)) + start;
}


function maxLenghStr(currentStr, maxLengh) {
  if (currentStr.lenght <= maxLengh) {
    return true;
  } else {
    return false;
  }
}


randomRangeNum(20, 30);
maxLenghStr('2000', 2);
