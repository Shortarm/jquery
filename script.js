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
    $(this).css("background-color", "yellow");
});
$("#reset").click(function(){

	document.location.reload();
	});
});
/*function() {
		if(672%square === 0) {
		var s = 672/square;
} else {
console.log("It must be a whole number!");
}
	};
} */
