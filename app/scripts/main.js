'use strict';

$(function() {
  
  var $slide = $('.main-section'),
      $slideTall = $('.second-section'),
      $w = $(window),
      isMobile = false;


  $('.link-internal').on('click', function(e) {
    e.preventDefault();
    var g = $(this).attr('data-link');

    if (g) {
      var goTo = $('#' + g).offset().top;
      if (!isMobile && isBigger()) {
        goTo +=  200;
      }
      $("html, body").animate({ scrollTop: (goTo) }, 1000);
    } else {
      console.log('not define');
    }
  });


  $('.link-internal-0').on('click', function(e) {
    e.preventDefault();
    var g = $(this).attr('data-link');

    if (g) {
      $("html, body").animate({ scrollTop: ($('#' + g).offset().top) }, 1000);
    } else {
      console.log('not define');
    }
  });


  function isMo() {
    var r = false;
    if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      r = true;
      $('body').addClass('mobile');
    }
    return r;
  }

  function isBigger() {
    var r = false;

    if ($w.width() > 767) {
      r = true;
    }

    return r;
  }

  function initPlugIn() {
    var s = null;

    s = skrollr.init({
      forceHeight: false
    });

      // skrollr.decks.init();

      // document.querySelector('.skrollr-decks-nav').addEventListener('click', function (e) {
      //   var el = e.target;

      //   if(el.tagName === 'A') {
      //     skrollr.decks.animateTo(el.getAttribute('href'));
      //   }

      //   e.preventDefault();
      // }, false);
    


    return s;
  }

  function initSiteParams() {
    var winH = $w.height();

    if(winH <= 550) {
      winH = 550;
    } 

    // Resize our slides
    $slide.height(winH);
    $slideTall.height(winH*2);
    
    // Refresh Skrollr after resizing our sections
    s.refresh();  
  }

  isMobile = isMo();
  if (!isMobile && isBigger()) {
    var s = initPlugIn();
    initSiteParams();
  }

  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#distribution-main').attr('src', '/images/global/slide4/distri/RENDER-GR1.png');


  $('.img-render-container-list a').on('click', function(e) {
    e.preventDefault();
    // var dir = '/images/global/slide4/distri/';
    // var t = $(this).attr('data-got-value');
    $('.img-render').addClass('hi');

    // console.log($(this).parent().index());

    $('.img-render').eq($(this).parent().index()).removeClass('hi');

  });

  $('#map-modal-id').on('show.bs.modal', function (event) {
    $('.section__1').find('.container-fluid').hide();
  });

  $('#map-modal-id').on('hide.bs.modal', function (event) {
    $('.section__1').find('.container-fluid').show();
  });


  $('#video-modal-id').on('hide.bs.modal', function () {
    $('video').trigger('pause');
  });

});



    
    
      
      