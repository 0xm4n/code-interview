//https://www.cnblogs.com/wuguanglin/p/Sum_Solution.html
function SumSolution(n) {
  return n && SumSolution(n - 1) + n;
}

test = SumSolution(5);

console.log(test);
