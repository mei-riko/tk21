/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("a.scroll").click(function () {
    (0, _jquery2.default)("html, body").animate({
      scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // Input mask
  if ((0, _jquery2.default)('.phone').length > 0) {
    (0, _jquery2.default)(".phone").inputmask({
      mask: "8 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,
      onincomplete: function onincomplete() {
        (0, _jquery2.default)(this).closest("form").addClass('error-phone');
        (0, _jquery2.default)(this).addClass('error');
        (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
      },
      oncomplete: function oncomplete() {
        (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
        (0, _jquery2.default)(this).removeClass('error');
        (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
      }
    });
  }
  (0, _jquery2.default)('input.phone').on('keydown', function (event) {
    if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
      event.preventDefault();
      (0, _jquery2.default)(this).blur();
      return false;
    }
  });

  // Show Btn
  (0, _jquery2.default)("#categoryShow").on("click", function () {
    if ((0, _jquery2.default)(this).hasClass("active")) {
      (0, _jquery2.default)(this).removeClass("active");
      (0, _jquery2.default)(".catalog .catalog__category").slideUp();
      (0, _jquery2.default)(this).html("Показать категории");
    } else {
      (0, _jquery2.default)(this).addClass("active");
      (0, _jquery2.default)(".catalog .catalog__category").slideDown();
      (0, _jquery2.default)(this).html("Скрыть категории");
    }
  });
  // Slider
  if ((0, _jquery2.default)('.slider').length > 0) {
    var $slickPortfolio = (0, _jquery2.default)('.slider#portfolioIndex');
    $slickPortfolio.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,

      autoplay: false,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    var $slickNews = (0, _jquery2.default)('.slider#newsIndex');
    $slickNews.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
  (0, _jquery2.default)("#arrowPrevNews").on("click", function () {
    (0, _jquery2.default)('.slider#newsIndex').slick('slickPrev');
  });
  (0, _jquery2.default)("#arrowNextNews").on("click", function () {
    (0, _jquery2.default)('.slider#newsIndex').slick('slickNext');
  });

  // Filter
  if ((0, _jquery2.default)('.filter').length > 0) {
    (0, _jquery2.default)('.filter.filter_select[data-title=type]').select2({
      placeholder: "Устройство",
      theme: 'default filter filter_select not-last',
      width: '100%'
    });
    (0, _jquery2.default)('.filter.filter_select[data-title=vendor]').select2({
      placeholder: "Вендор",
      theme: 'default filter filter_select mt-sm-15',
      width: '100%'
    });
  }
  // Mobile Navbar
  (0, _jquery2.default)(".header__menu#mobile-nav").on("click", function () {
    if (!(0, _jquery2.default)(this).hasClass("header__menu--active")) {
      (0, _jquery2.default)(this).addClass("header__menu--active");
      (0, _jquery2.default)(".header__nav").addClass("header__nav--active");
    } else {
      (0, _jquery2.default)(this).removeClass("header__menu--active");
      (0, _jquery2.default)(".header__nav").removeClass("header__nav--active");
    }
  });
  (0, _jquery2.default)(document).mouseup(function (e) {
    // событие клика по веб-документу
    var dropdownActive = (0, _jquery2.default)(".header__nav.header__nav--active"); // элемент

    if (!dropdownActive.is(e.target) // клик был не по блоку
    && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
    && !(0, _jquery2.default)(".header__menu#mobile-nav").is(e.target)) {
      (0, _jquery2.default)(".header__menu").removeClass("header__menu--active");
      dropdownActive.removeClass("header__nav--active");
    }
  });
  // Hide Navigation on Desktop
  (0, _jquery2.default)(window).resize(function () {
    if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
      (0, _jquery2.default)(".header__menu").removeClass("header__menu--active");
      (0, _jquery2.default)(".header__nav.header__nav--active").removeClass("header__nav--active");
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);