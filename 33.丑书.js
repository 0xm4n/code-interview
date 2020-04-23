// https://xin-tan.com/passages/2019-06-23-hash-ugly/

function GetUglyNumber_Solution(index) {
  if (index <= 0) return 0;

  const uglyNum = [1];

  let pointer2 = 0,
    pointer3 = 0,
    pointer5 = 0;

  for (let i = 1; i < index; i++) {
    uglyNum[i] = Math.min(
      uglyNum[pointer2] * 2,
      uglyNum[pointer3] * 3,
      uglyNum[pointer5] * 5
    );
    if (uglyNum[i] == uglyNum[pointer2] * 2) ++pointer2;
    if (uglyNum[i] == uglyNum[pointer3] * 3) ++pointer3;
    if (uglyNum[i] == uglyNum[pointer5] * 5) ++pointer5;
  }
  return uglyNum[index - 1];
}
