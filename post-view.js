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