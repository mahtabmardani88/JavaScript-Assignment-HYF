
/**
 * Credit to https://adventofcode.com/ for this exercise
 * 
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 * 
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 * 
 * We expect the output:
 * 
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
    { times: '1-3', letter: 'a', password: 'abcde'},
    { times: '1-3', letter: 'b', password: 'cdefg'},
    { times: '2-9', letter: 'c', password: 'ccccccccc'}
];
for(let i = 0 ; i < passwordList.length ; i++){
    const entryBox = passwordList[i];
    const [min , max] = entryBox.times.split('-').map(Number);
    const letter = entryBox.letter;
    const password =entryBox.password;

    let counter = 0 ;
    for(let j = 0 ; j < password.length ; j++){
        if(password[j] === letter){
            counter++;
        }
    }
    if(counter >= min && counter <= max){
        console.log(`password : ${password} is valid`);
    } else {
        console.log(`password : ${password} is notValid`);
    }
}
  // default result
  passwordList.forEach(item => {
    // convert the element password to array
    const { password, times, letter } = item;

    const onlyLetterArray = Array.from(password).filter(character => character === letter);
    const amountOfInstancesOfLetter = onlyLetterArray.length;
    const minimumAmount = parseInt(times.slice(0, 1));
    const maximumAmount = parseInt(times.slice(2));

    if (amountOfInstancesOfLetter >= minimumAmount && amountOfInstancesOfLetter <= maximumAmount) {
        console.log(`${password} is VALID, ${letter} is present ${amountOfInstancesOfLetter} times and should have been present at least ${minimumAmount} and at most ${maximumAmount} times`);
    }
    else {
        console.log(`${password} is INVALID, ${letter} is present ${amountOfInstancesOfLetter} times and should have been present at least ${minimumAmount} and at most ${maximumAmount} times`);
    }
});