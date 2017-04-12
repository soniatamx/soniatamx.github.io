(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.appState = {
  fadeInStart: 125,
  fadeInEnd: 700,
};
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
  if(window.scrollY >= 100 && !this.appState.stickyApplied) {
    $('#sticky-navigation').css('position', 'fixed');
    $('#sticky-navigation').css('padding-top', 0);
    console.log('sticky applied!')
    this.updateAppState('stickyApplied', true);
    // Intro div
  } else if (window.scrollY < 100 && !!this.appState.stickyApplied) {
    $('#sticky-navigation').css('position', 'relative');
    $('#sticky-navigation').css('padding-top', 100);
    this.updateAppState('stickyApplied', false);
  }

  // Handle Introduction Styles
  if(this.appState.stickyApplied && !this.appState.paddingAdjusted) {
    var introTopPadding = parseInt($('.intro').css('padding-top').replace('px',''));
    console.log('INTRO TOP PADDING', introTopPadding);
    $('.intro').css('padding-top', (this.appState.defaultNavHeight + introTopPadding) + 'px');
    this.updateAppState('paddingAdjusted', true);
  } else if (!this.appState.stickyApplied && this.appState.paddingAdjusted){
    $('.intro').css('padding-top', 90 +'px');
    this.updateAppState('paddingAdjusted', false);
  }

  // Handle Nav Background Fade In
  if(window.scrollY > this.appState.fadeInStart && window.scrollY < this.appState.fadeInEnd) {
    var alpha = parseFloat(window.scrollY - this.appState.fadeInStart) / (this.appState.fadeInEnd - this.appState.fadeInStart).toFixed(3);
    var newRgba = 'rgba(255,255,255,' + alpha + ')';
    $('#sticky-navigation').css('background-color', newRgba);
  } else if(window.scrollY <=  this.appState.fadeInStart) {
    $('#sticky-navigation').css('background-color', 'rgba(0,0,0,0)');
  }
});

},{}]},{},[1]);
