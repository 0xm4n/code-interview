function FindContinuousSequence(sum) {
  var res = [],
    small = 1,
    big = 2,
    middle = parseInt((1 + sum) / 2),
    curSum = small + big;

  while (small < middle) {
    if (curSum === sum) {
      res.push(getSequence(small, big));
    }

    while (curSum < sum && small < middle) {
      big++;
      curSum += big;

      if (curSum == sum) {
        res.push(getSequence(small, big));
      }
    }
    curSum -= small;
    small++;
  }
  console.log(res);
  return res;
}

function getSequence(small, big) {
  let temp = [];
  for (let i = small; i <= big; i++) {
    temp.push(i);
  }
  return temp;
}

FindContinuousSequence(15);
