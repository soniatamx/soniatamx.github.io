var stickyNav = new Foundation.Sticky($('#sticky-navigation').foundation(), {marginTop: 0, stickTo: 'top', stickyOn:'small'});
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
  console.log(resizeableIframe);
});
