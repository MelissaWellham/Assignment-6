$(document).ready(function(){
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"]; //Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD";

//Use $.append() in iteration on the drop-down menu
$(cities).each(function(index, element) {
	$("select").append("<option value='" + element + "'>" + element + "</option>"); //each loop in JavaScript to add values
	});

	$("select").change(function(event){ //Use the $.change event handler to capture user actions   
		event.preventDefault(); //Prevent a form submission 
		var city = $("#city-type").val(); //Store user input in var city and get the value of user input using $.val()
		displayCity(city, cities);  //Call function for display city 

	});

});

function displayCity (city, cities) {

	if(city == cities[0]) { //Use if/else if/else conditionals to control the flow of your application
		$("body").attr("class", "nyc"); //Use the $.attr() function to update html classes
	}

	else if(city == cities[1]) {
		$("body").attr("class", "sf");
	}

	else if(city == cities[2]) {
		$("body").attr("class", "la");
	}

	else if(city == cities[3]) {
		$("body").attr("class", "austin");
	}

	else if(city == cities[4]) {
		$("body").attr("class", "sydney");
	}

	else {
		alert("Error!");
	}

}

