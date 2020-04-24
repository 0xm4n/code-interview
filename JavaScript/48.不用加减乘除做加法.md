function Add(num1, num2) {
  var sum = 0,
    carry = 0;
  do {
    sum = num1 ^ num2;
    carry = (num1 & num2) << 1;
    num1 = sum;
    num2 = carry;
  } while (num2 != 0);
  return num1;
}
