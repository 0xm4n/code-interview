// https://xin-tan.com/passages/2019-06-23-recursive-loop-playing-cards/
function IsContinuous(numbers) {
  if (numbers.length !== 5) return false;
  numbers.sort();

  let numberOfZero = 0,
    numberOfGap = 0;

  for (let i = 0; i < numbers.length && numbers[i] === 0; ++i) ++numberOfZero;
  console.log(numberOfZero);

  for (let i = numberOfZero; i < numbers.length - 1; ++i) {
    if (numbers[i] == numbers[i + 1]) return false;

    numberOfGap += numbers[i + 1] - numbers[i] - 1;
  }
  return numberOfZero >= numberOfGap;
}

console.log(IsContinuous([8, 10, 0, 6, 0]));
