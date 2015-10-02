

$('button').on('click',function(e) {
	$('body').toggleClass("dark").toggleClass("light");
});

$('button').on('click', function(e) {
	$('button').toggleClass( "off").toggleClass("on");

});

if ($("button").hasClass("on off")) {
  alert ("this is a test")
}
// button class is dark then change status text to "Hey, who turn off the lights?"