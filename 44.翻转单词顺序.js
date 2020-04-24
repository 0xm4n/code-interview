// function reverseSentence(sentence) {
//     // 第一次翻转：每个字符
//     const chars = sentence.split("").reverse();
//     let result = "",
//       last = []; // 保存上一个空格到当前空格之间的所有字符

//     chars.forEach(ch => {
//       // 遇到空格，说明之前的字符组成了单词
//       // 进行第二次翻转：单词
//       if (ch === " ") {
//         result += last.reverse().join("");
//         last.length = 0; // 清空上一个单词
//       }

//       last.push(ch);
//     });

//     result += last.reverse().join("");
//     return result;
//   }

function reverseSentence(str) {
  console.log(str.split(" "));
  console.log(str.split(" ").reverse());
  return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence("I am a student."));
