//cnblogs.com/wuguanglin/p/FindNumsAppearOnce.html
function FindNumsAppearOnce(array) {
  let tmp = array[0];
  for (let i = 1; i < array.length; i++) {
    tmp = tmp ^ array[i];
  }
  if (tmp === 0) return;
  let index = 0;
  while ((tmp & 1) === 0) {
    tmp = tmp >> 1;
    index++;
  }
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (isOneAtIndex(array[i], index)) num1 = num1 ^ array[i];
    else num2 = num2 ^ array[i];
  }
  return [num1, num2];
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
}

function isOneAtIndex(num, index) {
  num = num >> index;
  return num & 1;
}
