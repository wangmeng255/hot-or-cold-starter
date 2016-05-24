
$(document).ready(function(){
	var key = Math.floor((Math.random() * 100) + 1);
	var count = 0;
  var pre = [];
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

  	$("form").submit(function( event ) {
      event.preventDefault();
  		var guess = parseInt($("#userGuess").val());
      $("#userGuess").val("");
  		console.log("submit "+guess);
  		if(!guess || (guess<1 && guess>100)) alert("Please input an integer between 1 and 100!");
  		else {
        if(pre.indexOf(guess) === -1) {
          pre.push(guess);
          var temp = Math.abs(guess - key);
    			if(temp>=50) $("#feedback").text("Ice cold");
    			if(temp>=30 && temp<50) $("#feedback").text("Cold");
    			if(temp>=20 && temp<30) $("#feedback").text("Warm");
          if(temp>=10 && temp<20) $("#feedback").text("Hot");
          if(temp>=1 && temp<10) $("#feedback").text("Very hot");
          if(temp === 0) $("#feedback").text("Just right!");
    			count += 1;
    			$("#count").text(String(count));
          $("#guessList").append("<li>"+String(guess)+"</li>");
        }
        else {
          alert(guess + " is already guessed");
        }
  		}
  	});

  	function newGame() {
  		key = Math.floor(Math.random() * 100) + 1;
  		count = 0;
  		console.log(key);
      pre.length = 0;
  		$("#count").text("0");
  		$("#userGuess").val("");
  		$("#feedback").text("Make your Guess!");
      $("#guessList li").remove();
  	}
});


