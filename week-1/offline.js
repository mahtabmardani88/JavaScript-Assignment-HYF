/* 
    Exercise 1: Calculate the Sum of Array Elements:
    Write a function calculateSum that takes an array of numbers as input and returns the sum of all the elements in the array.
*/

const totalNumbers = [6, 7, 8, 6, 6, 6, 9];
//  way 1
function calculateSum(numbers){
   let sum = 0 ;
   for(let number of numbers){
    sum += number;
   }
return sum;
}
sum = calculateSum(totalNumbers);
console.log(`${sum}`);
// way 2      different way to write code
console.log(totalNumbers.reduce((num1 , num2)=> num1 + num2 ));
// wey 3      another way
let sum1 = 0 ;
for(let i = 0 ; i < totalNumbers.length ; i++){
    sum1 += totalNumbers[i];
} console.log(sum1);
// way 4 
let sum2 = totalNumbers.reduce((num1,num2)=> num1 + num2);
console.log(sum2);
// ===================================================================================================================
/* 
    Exercise 2: Calculate the Average of Array Elements:
    Write a function calculateAverage that takes an array of numbers as input and returns the average of all the elements in the array.
*/

const averageNumbers = [6, 3, 48, 4, 12, 8, 16];
let average = (number)=>{
    let sum = 0;
for(let numbers of number ){
  sum += numbers;
}
return sum / number.length;
}
 console.log(average(averageNumbers));
//  way 2
let addNum = averageNumbers.reduce((num1 , num2)=> num1 + num2);
let sumAddNum = addNum / averageNumbers.length ;
let resultSumAddNum =Math.round(sumAddNum);
console.log(resultSumAddNum);

/*
    Exercise 3: Find the Largest Number in an Array:
    Write a function findLargestNumber that takes an array of numbers as input and returns the largest number in the array.
*/

const largestNumbers = [3, 7, 9, 48, 6, 6, 18];
let max = Math.max(3, 7, 9, 48, 6, 6, 18);
console.log(max);
