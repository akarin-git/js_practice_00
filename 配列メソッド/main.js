// ES6変数

let mutobleText = 'let 変更前';
mutobleText = 'let変更後';
console.log(mutobleText);

const mutobleArray = [1, 2, 3];
mutobleArray.push(4);
mutobleArray.push(5);
console.log(mutobleArray);


const mutobleObject = { id: 'hoge', value: 'fuga' }
mutobleObject['name'] = 'bar'
console.log(mutobleObject)


// アロー関数

function namefunc(message) {
  console.log(message)
}


const arrowFanc = (message) =>  {
  console.log(message)
}

const oneLineArrowFunc = (message) => console.log(message);

namefunc('これは名前つき関数です');
arrowFanc('これはアロー関数です');
oneLineArrowFunc('これはワンライン関数です');

const users = {

  name: 'akari',
}

const getUsername = (userName) => users[userName];
console.log(users)
const username = getUsername('name')
console.log(username)

