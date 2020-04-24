// https://xin-tan.com/passages/2019-06-23-list-first-same-node/

function FindFirstCommonNode(pHead1, pHead2) {
  let length1 = 0,
    length2 = 0;

  let node = pHead1;
  while (node) {
    length1++;
    node = node.next;
  }
  node = pHead2;
  while (node) {
    length2++;
    node = node.next;
  }

  let diff = Math.abs(length1 - length2),
    longList = null,
    shortList = null;
  if (length1 > length2) {
    [longList, shortList] = [pHead1, pHead2];
  } else {
    [shortList, longList] = [pHead1, pHead2];
  }

  while (diff > 0) {
    longList = longList.next;
    diff--;
  }
  while (longList && shortList) {
    if (longList === shortList) {
      return longList;
    }
    longList = longList.next;
    shortList = shortList.next;
  }
  return null;
}
