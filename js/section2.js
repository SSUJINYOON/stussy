$(function () {

  //옮겨적을 때 주의 사항, common.js 확인하기. 
  // winW -> $(window).width, winH -> $(window).height 로 바꾸기 (스크롤바까지 포함해버려서)

  function fnSticky() {
    var stickyH = $('.sticky-inner').innerWidth() - winW +  winH//winW * 2 + winH
   
    $(`.section2 ,.sticky-container`).css({ 'height': `${stickyH}px` })
    $(`.sticky`).css({ 'height': `${winH}px` })

    /* 
        stickyStart = sticky가 시작하는 지점
        stickyEnd = sticky가 끝나는 지점 
     */

    var stickyStart = $(`.sticky-container`).offset().top
    //()임시코드 밑에있는 section3의 offset - sticky의 height
    var stickyEnd = stickyStart + $(`.sticky-container`).innerHeight() - winH

    /*
      현재 스크롤이 stickyStart 전
        변화량 X
      현재 스크롤이 stickyStart 이상이면 && 스크롤이 stickyEnd 지점까지
        가로스크롤이 되어야해서 마이너스로 나와야함. 
      현재 스크롤이 stickyEnd 끝
        padding이 포함된 Width innerWidth를 사용. sticky - (sticky-inner) ->왼쪽으로 가려고 마이너스(더이상 움직이지 X)
        */

    var metaX

    if (scry < stickyStart) {//before sticky
      metaX = 0
    } else if (scry >= stickyStart && scry <= stickyEnd) { //sticky공간
      metaX = stickyStart - scry
    } else if (scry > stickyEnd) {
      metaX = $(`.sticky`).innerWidth() - $(`.sticky-inner`).innerWidth()
    }//if else 

    $(`.sticky-inner`).css({ 'transform': `translateX(${metaX}px)` })
  }

  fnSticky()
  $(window).resize(function () {
    fnSticky()
  }).scroll(function () {
    fnSticky()
  })

/* svg------------------------------ */
function fnSvg() {
  var t = $('.horz-scr1').offset().top
  if(scry >= t - winH * 0.8) {
    $('.svg-section').addClass('active')
  }else{
    $('.svg-section').removeClass('active')
  }
} 

fnSvg()
$(window).resize(function() {
  fnSvg()
}).scroll(function()  {
  fnSvg()
})

  //버튼을 누르면 해당 이미지로 바뀜
  $(`.dot button`).click(function () {
    var b =  parseInt($(this).attr('data-n'))
    console.log(b);
    $(this).parent().siblings('.sns-image').attr('data-n', b)
    $(this).attr('data-n',b).addClass('active')
    $(this).siblings('button').removeClass('active')

    $(this).parent().siblings('.sns-image').children('img').hide()
    $(this).parent().siblings('.sns-image').children('.img' + b).show()
    
    $(this).parent().siblings('.section2-arrow-R').show()
    $(this).parent().siblings('.section2-arrow-L').show()
    if(b>=3){
      $(this).parent().siblings('.section2-arrow-R').hide()
    }
    if(b==2){
    }
    if(b<=1) {
      $(this).parent().siblings('.section2-arrow-L').hide()
    }
  })


  //오른쪽 왼쪽 버튼 눌렀을 때 사진 바뀜
  $(`.sns-image-box button`).click(function () {

    var n = parseInt($(this).siblings('.sns-image').attr('data-n'))
    var increase = parseInt($(this).attr('data-increase'))

    n += increase
    $(this).siblings('.dot').children('button').removeClass('active')
    $(this).siblings('.dot').children(`button.btn${n}`).addClass('active')
    $(this).siblings('.section2-arrow-R').show()
    $(this).siblings('.section2-arrow-L').show()
    
    if (n >= 3) {
      n = 3
      $(this).hide()

    }
    if (n <= 1) {
      n = 1
      $(this).hide()
      
    }
    $(this).siblings('.sns-image').attr('data-n', n)
    $(this).siblings('.sns-image').children('img').hide()
    $(this).siblings('.sns-image').children('.img' + n).show()

  })

})