$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});

$('.noscroll').click(function(e) {
     // do something fancy
     return false; // prevent default click action from happening!
     e.preventDefault(); // same thing as above
});