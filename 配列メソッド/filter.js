// filter()条件に合う要素を抽出
// 条件がtrueの要素のみ返す

const objectArray = [
  { id: "1", text: "fuga" },
  { id: "2", text: "bar" },
  { id: "3", text: "buzz" }
];

const result = objectArray.filter(object => {
  // id1の要素の抽出
  return object.id === "1"

  // text bar以外の要素の抽出
  // return object.text !== "bar"

});

// 条件にマッチしたものの配列を返す
console.log(result)
//  [Object { id: "1", text: "fuga" }]

// 配列の中身を出したかったら
// console.log(result[0].text)




// findIndex()要素の何番目か

// 条件がtrueの要素の何番目かを返す

// const objectArray = [
//   { id: "1", text: "fuga" },
//   { id: "2", text: "bar" },
//   { id: "3", text: "buzz" }
// ];

const index = objectArray.findIndex(object => {
  return object.id === '3'
});
console.log(index,objectArray[index]);
// index = 2
// id3の要素が2番目でその配列を抽出
// index,objectArray[index] 
// = 2 { id: "3", text: "buzz" }
