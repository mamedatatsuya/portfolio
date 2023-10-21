$(function(){
  // 変数に要素を入れる
  var close = $('.modal-close'),
    container = $('.modal');

  $('.modal-open').click(function () {
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('.modal[data-id="modal' + id + '"]').addClass('active');
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){
    container.removeClass('active');
  });

  $('.close-up').on('click',function(){
    container.removeClass('active');
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on('click',function(e) {
    if(!$(e.target).closest('.modal-body').length) {
      container.removeClass('active');
    }
  });
});