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
  $("#btnShow").on("click", function(){
    if( $(this).hasClass("active") ){
      $(this).removeClass("active");
      $("#blockShow").slideUp();
      $(this).html("Показать фильтры");
    }else{
      $(this).addClass("active");
      $("#blockShow").slideDown();
      $(this).html("Скрыть фильтры");
    }
    
  });
  // Slider
  if( $('.slider').length > 0 ){
    let $slickPortfolio = $('.slider#portfolioIndex');
    $slickPortfolio.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows      : false,
        dots        : true,
        
        autoplay  : false,
        responsive: [
          {
            breakpoint: 1200,
            settings  : {
              slidesToShow  : 3,
              slidesToScroll: 3,
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
    let $slickGalleryLogo = $('.slider.gallery_logo');
    $slickGalleryLogo.slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows      : false,
      dots        : true,
      
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings  : {
            slidesToShow  : 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings  : {
            slidesToShow  : 2,
            slidesToScroll: 2,
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
  // Animation Toggle Filter
  function turnRight( item ){
    $(".toggle__bullet").css("left", "42px");
    $(".toggle__bullet").css("animation", "move .5s");
    
    item.removeClass("toggle__item--left");
    item.addClass("toggle__item--right");

    $(".filter_check .filter__item[data-position=left]").removeClass("filter__item--active");
    $(".filter_check .filter__item[data-position=right]").addClass("filter__item--active");
  }

  function turnLeft( item ){
    $(".toggle__bullet").css("left", "5px");
    $(".toggle__bullet").css("animation", "moveL .4s");
    
    item.removeClass("toggle__item--right");
    item.addClass("toggle__item--left");

    $(".filter_check .filter__item[data-position=right]").removeClass("filter__item--active");
    $(".filter_check .filter__item[data-position=left]").addClass("filter__item--active");
  }

  $(".toggle__item").on("click", function(){
    if ( $(this).hasClass("toggle__item--left") === true){ turnRight( $(this) ); }
    else if ( $(this).hasClass("toggle__item--right") === true){ turnLeft( $(this) ); }
  });

  $(".filter_check .filter__item").on("click", function(){
    let toggle = $(this).parent().find(".toggle__item");
    if( $(this).data("position") === "left" ){ turnLeft( $(this) ); }
    if( $(this).data("position") === "right" ){ turnRight( $(this) ); }
  });

  // Filter
  if( $('.filter').length > 0 ){
    $('.filter.filter_select[data-title="msoption|tags"]').select2({
      placeholder: "Устройство",
      theme      : 'default filter filter_select not-last',
      width      : '100%'
    });
    $('.filter.filter_select[data-title="ms|vendor"]').select2({
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
  // Resize Watch
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".header__menu").removeClass("header__menu--active");
      $(".header__nav.header__nav--active").removeClass("header__nav--active");
    }
    if ( $(window).width() > 576 || !window.matchMedia('screen and (max-width: 576px)').matches ){
      $("#btnShow").removeClass("active");
      $("#blockShow").attr("style","");
      $("#btnShow").html("Показать фильтры");
    }
  });
});
