// https://blog.csdn.net/zhning12L/article/details/95069013

function NumberOf1Between1AndN_Solution(n) {
  if (n < 0) return 0;

  var count = 0; // 计数

  var i = 1; // 位基数

  var high = 0,
    low = 0,
    cur = 0; // 高位，低位， 当前位

  while (n >= i) {
    high = parseInt(n / (i * 10));
    cur = parseInt(n / i) % 10;
    low = n - high * i * 10 - cur * i;

    if (cur == 0) {
      count += high * i;
    } else if (cur == 1) {
      count += high * i + low + 1;
    } else {
      count += (high + 1) * i;
    }

    i *= 10;
  }

  return count;
}
