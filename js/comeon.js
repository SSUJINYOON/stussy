  /* -----------window info -------------*/
  /* 변수앞에 var를 붙이면 지역변수 var를 붙이지 않으면 전역변수이다
  지역변수는 범위내에서만 사용가능
  전역변수는 전체에서 사용가능 */
  function wininfo() {
    scry = $(window).scrollTop()
    scrx = $(window).scrollLeft()
    winH = $(window).innerHeight()
    winW = $(window).innerWidth()
  }

  wininfo()
  $(window).resize(function () {
    wininfo()
  }).scroll(function () {
    wininfo()
  })


/* ================== */
var isMobile = false; 
var filter = "win16|win32|win64|mac";
if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
}

var scrSpeed = 0/* 사용자가 움직이지 전까진 0 */

window.addEventListener('mousewheel', function (e) {
  e.preventDefault()//브라우저휠은 안 쓰겠다 내맘대루~
  delta = e.wheelDeltaY / - 120 // delta마우스 방햫ㅇ
  /* console.log(delta) -120아래 +120위 */
  scrSpeed += 10 * delta/*휠할수록 속도가 빨라짐 */
}, { passive: false })//휠의 방향

setInterval(function () {
  if(isMobile) return false
  window.scrollTo({ //behavior 절대로 금지 자동움직임이라
    top: scry + scrSpeed //현재위치(scry)에서 움직여라 ~ 
  })//움직이는거 
  scrSpeed *= 0.95

  /* 1에 가까울수록 천천 0에 가까울수록 빠름 */
}, 30)
  /* -----------window info -------------*/
