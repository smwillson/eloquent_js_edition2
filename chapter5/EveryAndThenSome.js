/*
Every and then some
Arrays also come with the standard methods every and some. Both take
a predicate function that, when called with an array element as argument, returns true or false. Just like && returns a true value only when
the expressions on both sides are true, every returns true only when the
predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns true for any of the elements.
They do not process more elements than necessary—for example, if some
finds that the predicate holds for the first element of the array, it will
not look at the values after that.
Write two functions, every and some, that behave like these methods,
except that they take the array as their first argument rather than being
a method.


*/


function every(incomingArray, test){

	let givenArray = incomingArray;


	
for( let index = 0 ; index < givenArray.length ;index++){

	if(!(test(givenArray[index]))){

		return false;
		
	}

}
		
return true;

}


function some(incomingArray, test){

	let givenArray = incomingArray;

for( let index = 0 ; index < givenArray.length ;index++){

	if((test(givenArray[index]))){

		return true;
		
	}

}
		
return false;	

}

//To build every on top of some, we can apply ((De Morgan's laws)), which state that a && b equals !(!a || !b). 
//This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match.

function everySome(incomingArray,test){

	 return !incomingArray.some(function(element){!test(element);});

}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n > 10));
// → false
console.log(everySome([], n => n < 10));