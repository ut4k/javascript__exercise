var fizzbuzz = function(x){
	if(x%3 == 0 && x%5 == 0){
		return "fizzfbuzz!";
	}else if(x%3 == 0){
		return "fizz!";
	}else if(x%5 == 0){
		return "buzz!";
	}else{
		return x;
	}
}

var numbers = Array.from({length: 30}, (v, k) => k+1);
var result = numbers.map(number => fizzbuzz(number));

result.forEach(function(num){ console.log(num); })
