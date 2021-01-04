// 配列メッソド
// map() 新しい配列を作る
// 要素一つずつに処理


const array = [1, 2, 3, 4, 8];
const resultArray = array.map(x => x * 2)
console.log(resultArray);
// resultArray = [2, 4, 6, 8, 16];

// xにはarrayの要素がひとつづつ入ってきて, x * 2 をする。
// よって*2した要素で新しい配列を作る。

const obj = {
  "hoge": { text: "fuga" },
  "foo": { text: "bar" },
  "fiz": { text: "buzz" }
};

// Object.keyでkeyの配列を作る
const objectArray = Object.keys(obj).map(key => {
  const value = obj[key]
  // console.log(value)
  // console.log(key)
  // console.log(obj[key])
  value['id'] = key
  // console.log(value)
  return value
});

// mapは配列を返す
// objectで配列にしたかった
console.log(objectArray)
