function TreeLinkNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = null;
}

function GetNext(pNode) {
  if (pNode == pNode.next.left) {
    while (pNode.left !== null) {
      pNode = pNode.left;
    }
    return pNode;
  }
}
