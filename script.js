//scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});
// visual image slide
$(function() {
    $(".visual .slide").slick({ 
         infinite: true, //무한재생
         arrows: false, //화살표
         dots: true, //닷츠
         autoplay: true, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 4000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
         pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
         speed: 1000, //이미지가 넘어가는 속도
         customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).find('.dot');
            return thumb;
         }
    });
}); 
// best image slide
$(function() {
    $(".best .slide").slick({ 
         infinite: false, //무한재생
         arrows: true, //화살표
         dots: true, //닷츠  
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {  
           breakpoint: 1440, //화면 사이즈
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           } 
         },
         { 
           breakpoint: 767,
           settings: {    
             slidesToShow: 2,
             slidesToScroll: 2
           } 
         },
         { 
          breakpoint: 480,
          settings: {    
            slidesToShow: 1,
            slidesToScroll: 1
          } 
        }
      ]
    });
}); 
// pick image slide
$(function() {
$('.pickWrap .slide').slick({
        infinite: false, //무한재생
        arrows: true //화살표
    });
}); 
// new image slide
$(function() {
    $(".new .slide").slick({ 
         infinite: false, //무한재생
         arrows: true, //화살표
         dots: false, //닷츠  
         slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [
            { 
              breakpoint: 767,
              settings: {    
                slidesToShow: 2,
                slidesToScroll: 2
              } 
            },
            { 
              breakpoint: 480,
              settings: {    
                slidesToShow: 1,
                slidesToScroll: 1
              } 
            }
           ]
    });
}); 
// review image slide
$(function() {
    $(".review .slide").slick({ 
         infinite: false, //무한재생
         arrows: true, //화살표
         dots: true, //닷츠  
         slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [
            { 
              breakpoint: 767,
              settings: {    
                slidesToShow: 2,
                slidesToScroll: 2
              } 
            },
            { 
              breakpoint: 480,
              settings: {    
                slidesToShow: 1,
                slidesToScroll: 1
              } 
            }
           ]
    });
}); 