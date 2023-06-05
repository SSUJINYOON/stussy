$(function() {
let setTimeID1
  $(`.header button.mbtn`).click(function () {
    $(this).toggleClass('active')
    $(`nav.gnb-sm`).toggleClass('active')
  })

  $(`.header .gnb-sm .inner a`).click(function () {

    clearTimeout(setTimeID1)
    setTimeID1 = setTimeout(function () {
      $(`nav.gnb-sm`).removeClass('active')
      $(`.header button.mbtn`).removeClass('active')
    }, 800)   
  })
})
