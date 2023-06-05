const pTag1 = document.querySelector('.first-parallel')


const textArr1 = `#SURFBOARD  {  <img class="board" src="./img/section4/BOARD.png">  }  #SKATEBOARD  {  <img class="surf" src="./img/section4/SURF.png">  }  #UNDERGROUND  {  <img class="under" src="./img/section4/UNDER.png">  }  #SURFBOARD  {  <img class="board" src="./img/section4/BOARD.png">  }  #SKATEBOARD  {  <img class="surf" src="./img/section4/SURF.png">  }  #UNDERGROUND  {  <img class="under" src="./img/section4/UNDER.png">  }`.split('  ')


let count1 = 0

initTexts(pTag1, textArr1)

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++

  count1 = marqueeText(count1, pTag1, -1)

  window.requestAnimationFrame(animate)
}

animate()

$(function(){
  function drag(){
    var maxLeft =  $('.__main').innerWidth() - $('.shopBX').innerWidth()
    var left = parseInt($('.shopBX').css('left'))
    $('.shopBX').draggable({axis:'x',containment: [maxLeft,0,0,0]})
  
    if(left < maxLeft){

      $('.shopBX').css({'left':maxLeft})
    }
  }
  drag()
  $(window).resize(function(){
    drag()
  }).scroll(function(){
    drag()
  })
})




