'use strict';

$(function() {
  
  var $slide = $('.main-section'),
      $slideTall = $('.second-section'),
      $w = $(window),
      isMobile = false;


  function isMo() {
    var r = false;
    if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera))
      r = true;
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

  function init() {
    isMobile = isMo();
    if (!isMobile) {
      var s = initPlugIn();
      initSiteParams();
    }
  }

  // init();

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



    
    
      
      