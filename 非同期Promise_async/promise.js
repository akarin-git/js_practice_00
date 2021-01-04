// 非同期
// promiseで完了を待つ方法

// < promiseの状態 >

// pending:初期状態
// fulfilled:処理が成功して完了した状態
// rejected: 処理が失敗して完了した状態

// コンストラクタ
// const promise = new Promise()

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    someAsynchronousFunc(() => {
      // 何かしらの非同期処理
    }).then(() => {
      // 非同期が成功した場合
      return resolve('成功')
    }).catch(() => {
      // 失敗
      return reject('失敗')
    })
  })
}


// 例
const synchonousFunc = () => {
  // console.log("これは同期処理")
  return '完了'
};

// const message = '同期処理'
const result = synchonousFunc()
// console.log(message + result)

// これは同期処理
// 同期処理完了 (message + result)


// gitapi

const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://api.github.com/users/deatiger'
    
    // GiHub API をFetchメソッドで実行
    fetch(url).then(res => res.json())
    .then(json => {
      console.log('これは非同期処理成功時のメッセージ')
      return resolve(json.login)
    }).catch(error => {
      console.log('これは非同期失敗', error)
      return reject(null)
    })
  })
};
// console.log(getGitUsername)

const message = 'GitのユーザーIDは'
getGitUsername().then(username => {
  console.log(getGitUsername())
//   Promise {<pending>}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "deatiger
    console.log(message + username)
});