

$('button').on('click',function(e) {
	$('.light').toggleClass('dark');
});

$('button').on('click', function(e) {
	$('button').toggleClass( "off ");

});

if ($("#button").hasClass("on off")) {
  $("#status").animate({right: -700 +"px"}, 2000);
}
// button class is dark then change status text to "Hey, who turn off the lights?"