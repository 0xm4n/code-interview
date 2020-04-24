// https://www.cnblogs.com/wuguanglin/p/FirstAppearingOnce.html
let map = {};
function Init() {
  map = {};
}
function Insert(ch) {
  if (map[ch]) {
    map[ch] += 1;
  } else {
    map[ch] = 1;
  }
}

function FirstAppearingOnce() {
  for (const key in map) {
    if (map[i] === 1) {
      return i;
    }
  }
  return "#";
}
