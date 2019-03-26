/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let heightOfTriangle = 10, stringToPrint = `#`;

while (stringToPrint.length <= heightOfTriangle){

    console.log(stringToPrint + `\n`);
    stringToPrint += `#`;
}
