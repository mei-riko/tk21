import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing  : "swing"
        });
        return false;
    });
	
	// Input mask
	if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask           : "8 999 999 99 99",
      placeholder    : " ",
      showMaskOnHover: true,
      onincomplete   : function(){ 
      $(this).closest("form").addClass('error-phone'); 
      $(this).addClass('error'); 
      $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
	}
	$('input.phone').on('keydown', function(event) {
	  if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
		  event.preventDefault();
		  $(this).blur();
		  return false;
	  }
	});
  
  // Show Btn
  $("#categoryShow").on("click", function(){
    if( $(this).hasClass("active") ){
      $(this).removeClass("active");
      $(".catalog .catalog__category").slideUp();
      $(this).html("Показать категории");
    }else{
      $(this).addClass("active");
      $(".catalog .catalog__category").slideDown();
      $(this).html("Скрыть категории");
    }
    
  });
  // Slider
  if( $('.slider').length > 0 ){
    let $slickPortfolio = $('.slider#portfolioIndex');
    $slickPortfolio.slick({
        slidesToShow: 4,
        arrows      : false,
        dots        : true,
        
        autoplay  : false,
        responsive: [
          {
            breakpoint: 1200,
            settings  : {
              slidesToShow  : 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings  : {
              slidesToShow  : 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 576,
            settings  : {
              slidesToShow  : 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
    let $slickNews = $('.slider#newsIndex');
    $slickNews.slick({
        slidesToShow  : 3,
        slidesToScroll: 1,
        arrows        : false,
        dots          : false,
        autoplay      : true,
        responsive    : [
          {
            breakpoint: 992,
            settings  : {
              slidesToShow  : 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings  : {
              slidesToShow  : 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
  }
  $("#arrowPrevNews").on("click", function(){
    $('.slider#newsIndex').slick('slickPrev');
  });
  $("#arrowNextNews").on("click", function(){
    $('.slider#newsIndex').slick('slickNext');
  });

  // Filter
  if( $('.filter').length > 0 ){
    $('.filter.filter_select[data-title=type]').select2({
      placeholder: "Устройство",
      theme      : 'default filter filter_select not-last',
      width      : '100%'
    });
    $('.filter.filter_select[data-title=vendor]').select2({
      placeholder: "Вендор",
      theme      : 'default filter filter_select mt-sm-15',
      width      : '100%'
    });
  }
  // Mobile Navbar
  $(".header__menu#mobile-nav").on("click", function(){
    if( !$(this).hasClass("header__menu--active")){
        $(this).addClass("header__menu--active");
        $(".header__nav").addClass("header__nav--active");
    }else{
        $(this).removeClass("header__menu--active");
        $(".header__nav").removeClass("header__nav--active");
    }
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".header__nav.header__nav--active");  // элемент
      
    if (!dropdownActive.is(e.target) // клик был не по блоку
          && dropdownActive.has(e.target).length === 0  // и не по его дочерним элементам
          && !$(".header__menu#mobile-nav").is(e.target) ) { 
              $(".header__menu").removeClass("header__menu--active");
              dropdownActive.removeClass("header__nav--active");
    }
  });
  // Hide Navigation on Desktop
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".header__menu").removeClass("header__menu--active");
      $(".header__nav.header__nav--active").removeClass("header__nav--active");
    }
  });
});
