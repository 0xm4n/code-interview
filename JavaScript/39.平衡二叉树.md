// https://xmoyking.github.io/2018/03/27/js-offer-algorithms5/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  return lastOrder(pRoot).isBalance;
}

function lastOrder(pRoot) {
  let node = {
    depth: 0,
    isBalance: true,
  };

  if (!pRoot) {
    return node;
  }

  let left = lastOrder(pRoot.left);
  let right = lastOrder(pRoot.right);

  node.depth = 1 + (left.depth > right.depth ? left.depth : right.depth);
  if (left.isBalance && right.isBalance) {
    let diff = Math.abs(left.depth - right.depth);
    if (diff <= 1) {
      node.isBalance = true;
      return node;
    }
  }
  node.isBalance = false;
  return node;
}
