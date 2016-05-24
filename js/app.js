
$(document).ready(function(){
	var key = Math.floor((Math.random() * 100) + 1);
	var count = 0;
	console.log(key);
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(function() {
  		newGame();
  	});

  	$("#guessButton").click(function() {
  		var guess = parseInt($("#userGuess").val());
  		console.log(guess);
  		if(!guess || (guess<1 && guess>100)) alert("Please input an integer between 1 and 100!");
  		else {
  			if(guess > key) $("h2").text("Warm");
  			else {
  				if(guess < key) $("h2").text("Cold");
  				 else $("h2").text("Just Right!");
  				count += 1;
  				$("#count").text(String(count));
  			}
  		}
  	});
  	function newGame() {
  		key = Math.floor(Math.random() * 100) + 1;
  		count = 0;
  		console.log(key);
  		$("#count").text("0");
  		$("#userGuess").val("");
  		$("#feedback").text("Make your Guess!");
  	}
});


