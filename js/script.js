$(document).ready(function() {

for (var i = 1; i <= 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) { //check to see if i is divisible by 5 AND 3
		$("body").append("FizzBuzz <br>");
		console.log("FizzBuzz");
	} else if (i % 5 === 0) { //check to see if i is divisible by 5
		$("body").append("buzz <br>");
		console.log("buzz");
	} else if (i % 3 === 0) { //check to see if i is divisible by 3
		$("body").append("fizz <br>");
		console.log("fizz");
	} else {
		$("body").append(i + "<br>");
		console.log(i); //if i doesn't fall under the 3 cases below, print 
	}

}

});