
// test()マッチする文字列か判定

// 正規表現を使う
// マッチする->trueを返す
// マッチしない->falseを返す

const myName = 'Akari';
const testName = 'Sugiyan';

const regex = RegExp('Ak*')
// *の前の文字が位置しているものはtrue

console.log(regex.test(myName))
// true
console.log(regex.test(testName))
// false

console.log(/gi*/.test(testName))
// true


// 例

const userName = regex.test(myName)

if (userName) {
  console.log('Akariです')
} else {
  console.log('usernameが違います')
}