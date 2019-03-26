/*
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting
57
a grid of the given width and height.


*/

let gridSize = 10;

for (let current = 0; current < gridSize; current++){

	 console.log(buildString(current) +`\n`);

}

//This function builds the chessboard one row at-a-time.

function buildString(currentRow){

let stringToPrint= ``;
//pick the starting character and alternating character based on the current row of the chessboard.

let startChar = (currentRow % 2 === 0) ? ` ` : `#`;

let alternateChar =  (currentRow % 2 === 0) ? `#` : ` `;


	while(stringToPrint.length < gridSize){

		if(stringToPrint.length % 2 == 0){

			stringToPrint = stringToPrint + startChar;
		}
		else{

			stringToPrint = stringToPrint + alternateChar;
		}
			
	}
return stringToPrint;	
}