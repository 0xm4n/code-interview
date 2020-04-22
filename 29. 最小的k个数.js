// 题目 ： 输入 n 个整数，找出其中最小的 k 个数。
// 例如输入 4、5、1、6、2、7、3、8 这 8 个数字，
// 则最小的 4 个数字是 1、2、3、4

// 思路：创建一个容量为k的最大堆。遍历给定数据集合，与堆顶元素比较，
// 如果小于堆顶元素，则弹出堆顶元素，将当前元素替换堆顶元素。

function GetLeastNumbers_Solution(input, k) {
  if (input.length === 0 || k > input.length || k < 1) return [];

  let arr = input.slice(0, k);

  // Create max heap
  for (let i = Math.floor((k - 1) / 2); i >= 0; i--) {
    heapify(arr, k, i);
  }

  for (let i = k; i < input.length; i++) {
    if (arr[0] > input[i]) {
      [arr[0], input[i]] = [input[i], arr[0]];
      heapify(arr, k, 0);
    }
  }

  return arr.sort();
}

function heapify(arr, length, index) {
  var largest = index;
  var left = 2 * index + 1;
  var right = 2 * index + 2;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, length, largest);
  }
}

var testArr = [4, 5, 1, 6, 2, 7, 3, 8];

GetLeastNumbers_Solution(testArr, 4);
