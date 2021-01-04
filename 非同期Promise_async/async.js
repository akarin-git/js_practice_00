// async/await

const asyncAwaitFunc = async () => {
  const hoge = await someAsynchronousFunc(() => {
    // 何かしらの非同期処理
  }).then(() => {
    // 非同期成功
    return '成功'
  }).catch(() => {
    // 非同期失敗
    return '失敗'
  })
}

// 例

const getGitUsername = async () => {
  const message = 'GitのユーザーIDは';
  const url = 'https://api.github.com/users/deatiger'

  const json = await fetch(url)
    .then(res => {
      console.log('これは非同期成功')
      return res.json()
    }).catch(error => {
      console.error('非同期失敗', error)
      return null
    });
  
  const username = json.login;
  console.log(json.login)
  console.log(message + username)
}

getGitUsername();