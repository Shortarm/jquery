$(document).ready(function() {
	var i = 0
  var cell = '<div class = "cell"> </div>';
  for (var i = 0; i < 16*16; i++){
	$("#wrapper").append(cell);

};
$(".cell").mouseenter(function(){
    $(this).css("background-color", "yellow");
});
$("#reset").click(function(){
  document.location.reload(true);
});
});
