// Configurable Settings
window.appSettings = {
  colourOpacity: 0.9,
};

// Constant Values
window.appConstants = {
  fadeInStart: 150,
  fadeInEnd: 400,
};

// Application State
window.appState = {};


window.updateAppState = function(key, value) {
  if(!this.appState[key] || this.appState[key] !== value) {
    var newState = this.appState;
    newState[key] = value;
    this.appState = newState;
  }
}
window.updateAppState('defaultNavHeight', $("#sticky-navigation").height());

function instantiateModals() {
  var modalsChecked = false;
  var modalCounter = 0;

  while(!modalsChecked) {
    if(document.getElementById('galleryModal-' + (modalCounter + 1))) {
      modalCounter++;
    } else {
      modalsChecked = true;
    }
  }

  var modalList = []
  for(var i = 0; i < modalCounter; i++) {
    modalList.push('#galleryModal-' + (i + 1));
  }

  $(modalList.join(',')).foundation();

}

instantiateModals();

$('#galleryModal-3').hover(function() {
  $('#nordstrom-video').get(0).play();
});

$(window).resize(function() {
  var resizeableIframe = document.getElementById('resizeable-iframe');
});

// Handles Sticky Navigation
$(window).scroll(function() {
  // Handle Navigation Position Styles
  if(window.scrollY > 100 && !this.appState.stickyApplied) {
    $('#sticky-navigation').css('position', 'fixed');
    $('#sticky-navigation').css('padding-top', 0);
    console.log('sticky applied!')
    this.updateAppState('stickyApplied', true);
    // Intro div
  } else if (window.scrollY < 100 && !!this.appState.stickyApplied) {
    $('#sticky-navigation').css('position', 'absolute');
    $('#sticky-navigation').css('padding-top', 100);
    this.updateAppState('stickyApplied', false);
  }
});

$(window).scroll(function() {
  // Handle Nav Background Fade In
  if(window.scrollY > this.appConstants.fadeInStart && window.scrollY < this.appConstants.fadeInEnd) {
    var alpha = (parseFloat(window.scrollY - this.appConstants.fadeInStart) / (this.appConstants.fadeInEnd - this.appConstants.fadeInStart).toFixed(3)) * this.appSettings.colourOpacity;
    var newRgba = 'rgba(255,255,255,' + alpha + ')';
    $('#sticky-navigation').css('background-color', newRgba);

  } else if(window.scrollY <=  this.appConstants.fadeInStart) {
    $('#sticky-navigation').css('background-color', 'rgba(0,0,0,0)');
  }
});

// Smooth Scrolling
// Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
