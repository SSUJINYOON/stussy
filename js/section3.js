$(function () {

  /* video active 함수 */
  function fnImg() {
    $('.video').each(function () {
      var t = $(this).offset().top
      if (scry >= t - winH * 0.6) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
  }//fnImg



  fnBrand()
  fnImg()
  $(window).resize(function () {
    fnImg()
  }).scroll(function () {
    fnImg()
  })

  /* backgrond change */
  function fnBg() {
    $('.section3 .video').each(function () {
      var className = $(this).attr('class')
      var brand = $(this).attr('data-brand')
      if (className.match('motion')) {
        $('.section3').css({ 'background-image': `url(./img/section3/${brand}.jpg)` })
        $('.section3 h3').addClass(`${brand}`)
        $('.section3 h3').removeClass('brand')
      }//if
    })
  }//fnBg

  /* video,text  motion */
  $('.section3 .video').click(function (e) {
    e.preventDefault()
    document.querySelector('.section3 h3').innerHTML = 'Stüssy X'
    $('.section3').css({ 'background-size':'cover','ackground-position':'center','background-attachment':'fixed' })
    $(this).addClass('motion').css({ 'opacity': '1' })
    $('.section3 .video').not($(this)).css({ 'opacity': '0' })
    $('.section3 i').css({ 'display': 'block' })
    fnBg()
    var brand = $(this).attr('data-brand')
    if (brand === "Nike") {
      fnNike()
    } else if (brand === "Tim") {
      fnTim()
    } else if (brand === "Holden") {
      fnHolden()
    } else if (brand === "Dr") {
      fnDr()
    } else if (brand === "Givanchy") {
      fnGivanchy()
    }
  })

  let setTimeID
  $('.section3  i').click(function () {
    document.querySelector('.section3 h3').innerHTML = 'Stüssy X'
    $('.section3 h3').addClass('brand')
    fnBrand()
/*     var className = $(this).parent().attr('class')
    var brand = $(this).attr('data-brand')
     if (className.match('motion')) {
      $('.section3 h3').removeClass(brand)
    }//if  */

    $('.section3 .video').removeClass('motion')
    $('.section3 i').css({ 'display': 'none' })
    /* $('.section3').css({ 'background-image': 'url(./img/section3/bg.jpg)' }) */
    $('.section3').css({ 'background': '#000' })
    clearTimeout(setTimeID)
    setTimeID = setTimeout(function () {
      $('.section3 .video').css({ 'opacity': '0.8' })
    }, 2000)
    return false

  })


  /* video motion 모바일버전 */
  $('.section3 .video').bind('touchend', function () {
      document.querySelector('.section3 h3').innerHTML = 'Stüssy X'  
    $(this).addClass('motion').css({ 'opacity': '1' })
    $('.section3 .video').not($(this)).css({ 'opacity': '0' })
    $(this).children('video').trigger('play')
    $('.section3 i').css({ 'display': 'block' })
    fnBg()
   /*  var brand = $(this).attr('data-brand')
    if (brand === "Nike") {
      fnNike()
    } else if (brand === "Tim") {
      fnTim()
    } else if (brand === "Holden") {
      fnHolden()
    } else if (brand === "Dr") {
      fnDr()
    } else if (brand === "Givanchy") {
      fnGivanchy()
    }  */
  })
})
//function



