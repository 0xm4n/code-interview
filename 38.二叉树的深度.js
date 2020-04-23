// https://www.cnblogs.com/wuguanglin/p/TreeDepth.html
function TreeDepth(pRoot) {
  if (pRoot === null) return 0;
  const leftDepth = TreeDepth(pRoot.left);
  const rightDepth = TreeDepth(pRoot.right);
  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
}
