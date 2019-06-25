/*
Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the
input arrays.

*/


let twoDArray = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ];

const reducer = function (accumulator, currentValue){

	return accumulator.concat(currentValue);
}

console.log(twoDArray.reduce(reducer));