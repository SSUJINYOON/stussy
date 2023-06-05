$(function() {
  
  /* 스크롤 시 이미지 커졌다 작아졌다 */
  /* var $device = $('.section6');
  var $deviceOST = $device.offset().top - $offset;

  $(window).scroll(function() {
    if($(this).scrollTop() > $deviceOST - winH) {
      $device.find('img').addClass('animate')
    } else{
      $device.find('img').removeClass('animate')
    }
  }) */

  var $device = $('.section6');
  var $offset = 800;
  var $deviceOST = $device.offset().top - $offset;

  $(window).scroll(function() {
    if($(this).scrollTop() > $deviceOST) {
      $device.find('img').addClass('section6__active')
    } 
    else if($(this).scrollTop() < $deviceOST){
      $device.find('img').removeClass('section6__active')
    } 
    
  });


}) // document.ready