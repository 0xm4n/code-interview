// https://www.cnblogs.com/wuguanglin/p/duplicate.html
function duplicate(numbers, duplication) {
  if (numbers == null) return false;
  if (numbers.length == 1) return false;
  for (let i = 0; i < numbers.length; i++) {
    while (i !== numbers[i]) {
      if (numbers[i] === numbers[numbers[i]]) {
        duplication[0] = numbers[i];
        return true;
      }
      [numbers[i], numbers[numbers[i]]] = [numbers[numbers[i]], numbers[i]];
    }
  }
  return false;
}
