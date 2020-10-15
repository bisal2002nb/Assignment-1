console.log("My first Java Script from external file.");
//JS is a loosely typed language
var x = 6;
var y = 5;

console.log(x*y);

//functions in JScript
function sum(a,b)
{
    return a + b;
}

console.log(sum(x,y));

//Assigning functions to variables
var mySum = sum;

console.log(mySum);