// https://xin-tan.com/passages/2019-06-23-recursive-loop-and-number-is-s/

function FindNumbersWithSum(array, sum) {
  if (array.length <= 1) {
    return [];
  }
  let left = 0,
    right = array.length - 1;
  while (left < right) {
    let curSum = array[left] + array[right];
    if (curSum === sum) {
      return [array[left], array[right]];
    } else if (curSum > sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
