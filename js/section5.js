$(function () {
    
    /* contact 입력창 화살표 모션 */
    $('.section5 input, .section5 textarea').click(function () {
        $('.section5 label').removeClass('active')//화살표 지움
        $(this).siblings('.section5 label').addClass('active')//화살표
        $('.section5 h2').addClass('active')//비행기 실행
    })//click
    
    /* h2 비행기 모션 */
    {
        $('.section5 .FormContainer').click(function () {
             $('.section5 h2').removeClass('active')//form밖을 눌렀을때 비행기 돌아감
             $('.section5 label').removeClass('active')//form밖을 눌렀을때 안의 화살표 없애기
        })//click


      $('.section5 form').click(function () {//form안에 누르면 비행기 돌아가지 않음
                return false;
        })   
    }
})//ready