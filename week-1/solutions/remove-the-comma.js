/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */
let myString = 'hello,this,is,a,difficult,to,read,sentence';

// we have 2 different way to remove the comma in string 
// 1 = use replaceAll =>  replaceAll ("which item we want to remove" , "and when i remove wht should set on this forexample should set empty string")

let removeComma=myString.replaceAll(","," ");
console.log(removeComma);

// 2 = use => split and join =>  split("which item should remove").join("which item should set maybe " " empty string")

let removeComma1 = myString.split(",").join(" ");
console.log(removeComma1);

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(removeComma === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');
console.assert(removeComma1 === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');