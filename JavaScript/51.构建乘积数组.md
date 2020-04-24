// https://www.cnblogs.com/wuguanglin/p/multiply.html
function multiply(array) {
  var B = [],
    C = [],
    D = [];

  C[0] = 1;
  D[array.length - 1] = 1;

  for (let i = 1; i < array.length; i++) {
    C[i] = array[i - 1] * C[i - 1];
  }

  for (let i = array.length - 2; i >= 0; i--) {
    D[i] = array[i + 1] * D[i + 1];
  }

  for (let i = 0; i < array.length; i++) {
    B[i] = C[i] * D[i];
  }
  return B;
}

// test = multiply([1, 2, 3, 4, 5]);
// console.log(test);

function isNumeric(s) {
  // var reg = /[+-]?d*(.d*)?([eE][+-]?d+)?/g;
  const reg = new RegExp(/[+-]?d*(.d*)?([eE][+-]?d+)?/g);
  return reg.test(s);
}

console.log(isNumeric("1.23"));
