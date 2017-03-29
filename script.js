$(document).ready(function() {
	var i = 0
  var cell = '<div class = "cell"> </div>';
  for (var i = 0; i < 256; i++){
	$("#wrapper").append(cell);

};
$(".cell").mouseenter(function(){
    $(this).css("background-color", "yellow");
});
});
