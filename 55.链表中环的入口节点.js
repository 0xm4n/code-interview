// https://www.cnblogs.com/wuguanglin/p/EntryNodeOfLoop.html
function EntryNodeOfLoop(pHead) {
  let slow = pHead;
  let fast = pHead;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      let p = pHead;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
}
