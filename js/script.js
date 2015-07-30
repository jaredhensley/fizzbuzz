$(document).ready(function() {

	$("button").on("click", function() {

		var highNumber = document.getElementById('highNumber').value;  //chose to go with vanilla js here just instead of jquery, just something different.


		var fizzbuzz = function (arg) {

		for (var i = 1; i <= arg; i++) {
			if (i % 5 === 0 && i % 3 === 0) { //check to see if i is divisible by 5 AND 3
				$(".output").append("FizzBuzz <br>");
				console.log("FizzBuzz");
			} else if (i % 5 === 0) { //check to see if i is divisible by 5
				$(".output").append("buzz <br>");
				console.log("buzz");
			} else if (i % 3 === 0) { //check to see if i is divisible by 3
				$(".output").append("fizz <br>");
				console.log("fizz");
			} else {
				$(".output").append(i + "<br>");
				console.log(i); //if i doesn't fall under the 3 cases below, print 
			}

		}


		}

	fizzbuzz(highNumber);

	});
	
});
