function isSymmetrical(pRoot) {
  if (pRoot == null) return true;
  return compareRoot(pRoot.left, pRoot.right);
}

function compareRoot(left, right) {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return (
    compareRoot(left.right, right.left) && compareRoot(left.left, right.right)
  );
}
