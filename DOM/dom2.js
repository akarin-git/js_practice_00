

const setDomElementModule = (() => {
  let counter = 1;
  return {

    setInnerText: (id) => {
      const element = document.getElementById(id)
      console.log(element.innerText)
      element.innerText = 'fugaに書き換える'
      console.log(element.innerText)
    },

    setInnerHtml: (id) => {
      const element = document.getElementById(id)
      const literal = '書き換えられた'
      // console.log(element.innerHTML)
      element.innerHTML = `<p id="child">HTML${literal}</p>`
      console.log(element.innerHTML)
    },

    replaceImageSrc: (id) => {
      const element = document.getElementById(id)
      element.setAttribute('src','https://drive.google.com/uc?export=view&id=1E8jqnNgvDPqtqZ3wH6-QuoOmPN8xjwP8')
    },

    appendChildNode: (id) => {
      const element = document.getElementById(id)
      element.insertAdjacentHTML(
        // 子要素の末尾に
        'beforeend',
        `<div>${counter}つめの子要素だよ</div>`
      )
      counter++
    }
    
  }
})();




// innerHTML()
// dom要素ないのhtmlを取得.設定できる
// テンプレートリテラル`<p>`
// を使ったら中にhtml記述できる&変数を渡す事ができる


// setAttribute()
// DOM要素の属性を設定できる
{/*html <img ~ > */ }
// const element = document.getElementById(id)
// element.setAttribute('src', 'assets/after.jpeg')
// 第一引数:変更対象の属性名
// 第二引数:変更する値


// insertAdjacentHTML()
// 指定したDOMの相対的な位置にhtmlを挿入する

// 指定できる4つのポジション
// 1.beforebegin: 自身の直前
// 2.afterbegin: 子要素の先頭
// 3.beforeend: 子要素の末尾
// 4.afterend:自身の直後

// div id="list"

// let count = 1;
// const element = document.getElementById(id)
// element.insertAdjacentHTML(
//   'beforeend',
//   `<div>${count}爪の子要素だよ</div>`
// )

// counter++



