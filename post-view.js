//花岡
'use strict';
//!ボタンで移動
var element = document.getElementById('target'); // 移動させたい位置の要素を取得
    var rect = element.getBoundingClientRect();
    var position = rect.top;    // 一番上からの位置を取得

function scrollToComment() {
  scrollTo(0, position);
 }
 function stt() {
    scrollTo(0, 0);
   }

   //!ログインしていないときログインページに飛ばす
   //未完成
   var PostCommentConfirm = 0
   function ConfirmLogin(){
    
      window.location.href = "login-form.html";
     
  }

  //!もっとみる
  document.querySelector('.moreview').addEventListener('click', e => {
    // .hidden が指定されている .item をさがす
    const hiddenItems = document.querySelectorAll('.box2.hidden');
  
    // .hidden.item が1つ以上ある場合、1つ目を表示する
    if(hiddenItems.length > 0) {
      hiddenItems[0].classList.remove('hidden');
    }
  
    // .hidden.item が2つ以上ある場合、2つ目を表示する
    if(hiddenItems.length > 1) {
      hiddenItems[1].classList.remove('hidden');

    }
    // .hidden.item が3つ以上ある場合 (= 2つを表示してもまだ非表示のものがある場合)
    // ボタン非表示を実行せず中断する
    if(hiddenItems.length > 2) return;
  
    // ボタンを非表示にする
    e.currentTarget.classList.add('hidden');
  });