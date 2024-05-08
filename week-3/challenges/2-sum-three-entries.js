/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result=0;
for(let i = 0 ; i < list.length ; i++){
    for(let t = i + 1 ; t < list.length ; t++){
        for (let d = t + 1 ; d < list.length ; d++){
            if (list[i] + list[t] + list[d] === 2020){
                result = list[i] * list[t] * list[d];
                console.log(`result is :  ${list[i]} * ${list[t]} * ${list[d]} = ${result}`);
            }
        }
    }
}
    
  // default result
  list.forEach((item, idx) => {
    // We use a for loop here instead of forEach so we only compare the numbers after the current item in the list
    for (let i = idx + 1; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if ((item + list[i] + list[j]) === 2020) {
                result = item * list[i] * list[j];
            }
        }
    }
});


// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);