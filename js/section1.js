$(function () {
  function motion() { 
    
    $('.section1 figure').each(function () {
      var t = $(this).offset().top //머리 닿기
      var metaH
      if (window.matchMedia('(min-width:1000px)').matches) {//1000이상일때
        if (scry < t - 60) {
          metaH = '100%' 
        } else if (scry >= t - 60 && scry < t - 60 + winH  ) {
          metaH = `calc(100% - ${scry - (t - 60)}px)`
        }else{   
          metaH = 0
        }
        $(this).children('img').css({'height':metaH})
      }//media 
    })//section-about each
    
    //--1,2번 이미지 높이 주기---------------------------------------------------------------------
    var img2 = $('.section1 figure.about2 ').offset().top //.about2 머리
    var img3 = $('.section1 figure.about3 ').offset().top //.about3 머리
    var img4 = $('.section2').offset().top //.about3 머리

    $('.section1 figure.about1 img').css({'height':(img2 - scry)+'px' })//이미지 크기 조절   
    $('.section1 figure.about2 img').css({'height':(img3 - scry)+'px' })//이미지 크기 조절   
    $('.section1 figure.about3 img').css({'height':(img4 - scry)+'px' })//이미지 크기 조절   

    //-----------------------------------------------------------------------

    $('.section1 figure').each(function(i){
      var t = $(this).offset().top // 해당 피규어 머리 높이
      if (window.matchMedia('(min-width:1000px)').matches){//클 때 ==========================
        
        if(scry >= t - winH * 0.7){ // 해당 피규어 머리가 중간에 오면 
          $(this).addClass('activeT') 
        }else{
          $(this).removeClass('activeT')
        }
        
        if (scry >= t - 60 * (i+1) ) {//해당 피규어가 헤더에 머리가 닿았다면
          $(this).addClass('active')  

        } else{   
          $(this).removeClass('active')
        }
      }else{//작을 때  =======================================================================
        if (scry >= t - 45) {//헤더에 머리가 닿았다면
          $(this).addClass('active')     
        } else{   
          $(this).removeClass('active')
        }

        // 작은화면에서 텍스트 박스가 생기는 효과 
        if (scry >= t - winH * 0.4) { // 중간 쯤에 머리가 닿았다면 
          $(this).find('.textbox').slideDown(400) //택스트 박스 생성
        } else{   
          $(this).find('.textbox').slideUp()
        }  
      }
    })
/* 
    $('.section1 figure.about1').each(function(){
      var t = $(this).offset().top 
      if (window.matchMedia('(min-width:1000px)').matches){//클 때
        if (scry >= t - 60) {//헤더에 머리가 닿았다면
          $(this).addClass('active')  
        } else{   
          $(this).removeClass('active')
        }
      }else{//작을 때
        if (scry >= t - 45) {//헤더에 머리가 닿았다면
          $(this).addClass('active')     
          //$(this).find('.textbox').slideDown() //택스트 생성
        } else{   
          $(this).removeClass('active')
        //$(this).find('.textbox').slideUp()
        }

        if (scry >= t - winH * 0.5) {//헤더에 머리가 닿았다면 
          $(this).find('.textbox').slideDown(500) //택스트 생성
        } else{   
          $(this).find('.textbox').slideUp()
        }  
      }
    })//about1----------------------------------------------------
    $('.section1 figure.about2').each(function(){
      var t = $(this).offset().top 
      if (window.matchMedia('(min-width:1000px)').matches){//클 때
        if (scry >= t - 120) {//헤더에 머리가 닿았다면
          $(this).addClass('active')     
        } else{   
          $(this).removeClass('active')
        }
      }else{//작을 때
        if (scry >= t - 45) {//헤더에 머리가 닿았다면
          $(this).addClass('active') 
        } else{   
          $(this).removeClass('active')
        }
      }
    })//about2--------------------------------------------------
    $('.section1 figure.about3').each(function(){
      var t = $(this).offset().top 
      if (window.matchMedia('(min-width:1000px)').matches){//클 때
        if (scry >= t - 180) {//헤더에 머리가 닿았다면
          $(this).addClass('active')  
          //$(this).addClass('activeH') //화면정지!!!!!!!!!!!!!!!!!!!!!
          
          
        } else{   
          $(this).removeClass('active')
        }
      }else{//작을 때
        if (scry >= t - 45) {//헤더에 머리가 닿았다면
          $(this).addClass('active')     
        } else{   
          $(this).removeClass('active')
        }
      }
    })//about3---------------------------------------------------
    */
  }//motion()

  motion()
  $(window).resize(function () {
    motion()
  }).scroll(function () {
    motion()
  })
}) 