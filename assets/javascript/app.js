$(document).ready(function() {

	$(".hiden").hide();
	$(".endStatus").hide();
	$("img").hide();

	var result = [];
	var allChecked = [];
	var score = 0;
	var countDown = 30;
	var intervalId;
	var wrongAnswers = 0;

	$("submit").on("click", stop);

	$("#submit").on("click", function(){
		allCheck = $('input[type="radio"]:checked')
		result = $('input[value="1"]:checked');
			if (allCheck.length < 5) {
				alert("Make sure each question has an answer.")
			}
			else if (result.length === 5 ) {
				stop ();
				bold ();
				score = 5;
				$("#scoreState").html("You got them all correct!");
				$(".endStatus").show();
			}
			else if(result.length === 4) {
				stop ();
				bold ();
				score = 4;
				wrongAnswers = 1;
				$(".score").html(score);
				$(".misses").html(wrongAnswers);
				$(".endStatus").show();
			}
			else if(result.length === 3) {
				stop ();
				bold ();
				score = 3;
				wrongAnswers = 2;
				$(".score").html(score);
				$(".misses").html(wrongAnswers);
				$(".endStatus").show();
			}
			else if(result.length === 2) {
				stop ();
				bold ();
				score = 2;
				wrongAnswers = 3;
				$(".score").html(score);
				$(".misses").html(wrongAnswers);
				$(".endStatus").show();
			}
			else if(result.length === 1) {
				stop ();
				bold ();
				score = 1;
				wrongAnswers = 4;
				$(".score").html(score);
				$(".misses").html(wrongAnswers);
				$(".endStatus").show();
			}
			else if(result.length === 0) {
				stop ();
				bold ();
				score = 0;
				wrongAnswers = 5;
				$("#scoreState").html("You didn't get a single one right...");
				$(".endStatus").show();
			};
	});

function run() {
	$("#begin").one("click", function() { 
      intervalId = setInterval(decrement, 1000);
      $(".hiden").show();
      $("#startButton").hide();
	});
};
 
function decrement() {
	countDown--;
	$(".timer").html(countDown);

		if(countDown === 0) {
			stop();
			alert("Times Up!")
			clear();
		}
};

function bold() {
	$(".winner1").html("<i>The Great Barrier Reef in Australia</i>");
	$(".winner2").html("<i>The Sailfish</i>");
	$(".winner3").html("<i>The Blue Whale</i>");
	$(".winner4").html("<i>The Saltwater Crocodile</i>");
	$(".winner5").html("<i>Humans have explored less than 10% of the ocean.</i>");
};
function stop() {
	clearInterval(intervalId);
	$("#submit").hide();
};

function clear() {
	$(".hiden").hide();
	$("img").show();
	$("#outOfTime").text("You either answer all, or none. Sorry, friend.")
}

run();

});