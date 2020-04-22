// cnblogs.com/wuguanglin/p/PrintMinNumber.html

function PrintMinNumber(numbers) {
  numbers.sort(function (a, b) {
    const str1 = `${a}${b}`;
    const str2 = `${b}${a}`;
    if (str1 < str2) return -1;
    if (str1 > str2) return 1;
    else return 0;
  });

  let result = numbers.join("");
  return result;
}

var test = [3, 32, 321];
console.log(PrintMinNumber(test));
