$(document).ready(function() {
	var i = 0;
	//var s = 16;//
	var square = prompt("Enter the number of cells per side you want.",16);
	var s = square;
	  var cell = '<div class = "cell" style="height:' + 672/s + 'px; width:' + 672/s + 'px;"> </div>';
  for (var i = 0; i < s*s; i++){
	$("#wrapper").append(cell);
};
$(".cell").mouseenter(function(){
    $(this).css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16) );
});
$("#reset").click(function(){

	document.location.reload();
	});
});
