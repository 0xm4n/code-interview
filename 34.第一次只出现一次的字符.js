//https://xin-tan.com/passages/2019-06-23-hash-first-no-repeat-char/
function FirstNotRepeatingChar(str) {
  if (str.length < 1 || str.length > 10000) return -1;
  const chars = str.split("");
  const map = {};
  for (let char of chars) {
    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
