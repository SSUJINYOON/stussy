$(function () {

  var headerH
  function fnHeaderHeight() {
    if (matchMedia('(min-width:800px)').matches) {
      headerH = 60
    } else {
      headerH = 50
    }
  }
  fnHeaderHeight() 
  $(window).resize(function () {
    fnHeaderHeight()
  })  

  $('.gnb a').click(function () {
    scrSpeed = 0
    smoothScroll = false
    let section = $(this).attr('data-section')
    let t = $(`.${section}`).offset().top - headerH
    $('body,html').stop().animate({ 'scrollTop': `${t}` },function(){
      smoothScroll = true
    })
  })

 $('.header h1 a').click(function(){
  $('body,html').stop().animate({ 'scrollTop': `0` })
 })
})