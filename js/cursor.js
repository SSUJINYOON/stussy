
$(function(){
  $('textarea,a,.video,button,input,i').mouseenter(function () {
    $('.cursor').addClass('hover')
  })
  $('textarea,a,.video,button,input,i').mouseleave(function () {
    $('.cursor').removeClass('hover')
  })
$('.__main').mouseenter(function(){
    $('.se04-cursor ').css({'display':'flex'}) 
  $('.cursor').css({'display':'none'})
})
$('.__main').mouseleave(function(){
   $('.se04-cursor ').css({'display':'none'}) 
  $('.cursor').css({'display':'block'})
})
})

$(window).mousedown(function () {
  $('.cursor').addClass('click')
})

$(window).mouseup(function () {
  $('.cursor').removeClass('click')
})


$(window).mousemove(function (e) {
  window.clientX = e.clientX
  window.clientY = e.clientY
  $('.cursor').css({ 'left': `${window.clientX}px`, 'top': `${window.clientY}px` })
  $('.se04-cursor').css({ 'left': `${window.clientX}px`, 'top': `${window.clientY}px` })
})

