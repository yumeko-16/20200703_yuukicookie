// フェードインの設定
$(function() {
  $(window).scroll(function () {
    $('.sa').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 0) {
        $(this).addClass('show');
      }
    });
  });
});


// スムーススクロールの設定
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// ポップアップ
$(function() {
  // show popupボタンクリック時の処理
  $('#show').click(function(e) {
    $('#popup, #layer').fadeIn();
  });
  // レイヤー/ポップアップのcloseボタンクリック時の処理
  $('#close, #layer').click(function(e) {
    $('#popup, #layer').fadeOut();
  });
});


// バーガーメニュー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();


// バリデーションチェック
$(function() {
  console.log('fuga');
  $(".orderform").validate({
    rules : {
      Email: {
        required: true,
        email: true
      }
    },
    messages: {
      Email:{
        required: "必須項目です。入力をお願いします。",
        email: "Eメールの形式で入力して下さい。"
      }
    }
  });
});









