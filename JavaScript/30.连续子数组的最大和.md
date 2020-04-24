// https://blog.csdn.net/zhning12L/article/details/83448274
function FindGreatestSumOfSubArray(array) {
  var curSum = array[0],
    maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (curSum < 0) {
      curSum = array[i];
    } else {
      curSum += array[i];
    }
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
}

var test = [6, -3, -2, 7, -15, 1, 2, 2];

FindGreatestSumOfSubArray(test);
