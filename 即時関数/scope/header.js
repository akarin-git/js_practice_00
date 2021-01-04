const headerModule = (() => {
  // 初期化
  let counter = 0;
  return {
    // メソッド化
    countUp: () => {
      counter += 1
      console.log("現在のカウントは",counter)
    },
    selectMenu: () => {
      console.log("ヘッダーのメニューが選択されました")
    }
  }

})();