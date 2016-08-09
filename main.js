/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log('Question 1');

function divideByTwo(input){
  return input/2;
}
console.log(divideByTwo(6));

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log('Question 2');
var name1 = 'Mary';
var name2 = 'John';

function greeting(name1,name2){
  return ('Hello ' + name1 + ' & '+ name2 +'!');
}
console.log(greeting(name1, name2));


// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log('Question 3');
var cashewPrice = 3.00;

function totalPrice(cashewPrice){
return cashewPrice*5;
}
console.log(totalPrice(cashewPrice));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
console.log('Question 4');

var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

function teams(teammates){
  var i;
  var team1 = [];
  var team2 = [];

  for (i=0; i<teammates.length; i++){
    if (i%2 === 0){
      team1.push(teammates[i]);
    } else {
      team2.push(teammates[i]);
    }
  }

  return {
    team1: team1,
    team2: team2
  };
}
console.log(teams(teammates));
console.log(teams(['foo', 'bar', 'bat', 'baz']));


// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log('Question 5');

function quarter(number){
  return number/4;
}
var quarteredNumber = quarter(8);
console.log(quarteredNumber);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log('Question 6');
function area(length, width){
  return length * width;
}
console.log(area(5,5));

function perimeter(length, width){
  return (length + width) * 2;
}
console.log(perimeter(5,5));

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log('Question 7');
var greatSleep = 'You\'re getting great rest!';
var badSleep = 'Try to get more sleep';

function sleepings(hours){
  if (hours > 8){
    return greatSleep;
  } else{
    return badSleep;
  }
}
console.log(sleepings(5));
console.log(sleepings(10));

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.
console.log('Question 8');
var userNumber = window.prompt('Please enter a three digit number','number here...');

function integers(userNumber){
  // 1. Convert string input into array of numbers
  // 2. Reduce array of numbers to calc the sum
  // 3. Return the sum

  var splitNumbers = userNumber.split('');
  console.log(splitNumbers);

  var mappedNumbers = splitNumbers.map(Number);
  console.log(mappedNumbers);

  var reducedArray = mappedNumbers.reduce(function(prev,current){
    return prev + current;
  })
  return reducedArray;
}
console.log(integers(userNumber));


// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
console.log('Question 9');

function addingChange(quarters, dimes, nickles, pennies){
  var totalQuarters = quarters * .25;
  var totalDimes = dimes * .10;
  var totalNickles = nickles * .05;
  var totalPennies = pennies * .01;
  var totalChange = totalQuarters + totalDimes + totalNickles + totalPennies;
  var exactChange = totalChange.toFixed(2);
  var totalDollarAmount = '$ ' + exactChange;
  console.log(totalDollarAmount);
  return totalDollarAmount;
}
console.log(addingChange(4,25,3,15));

// 10. Develop a function that determines a person's age by prompting them for their birth year.
console.log('Question 10');

var inputAge = window.prompt('Enter your birth year', 'yyyy');

function calculateAge(year){
  var parsedYear = parseInt(inputAge);
  //console.log(parsedYear);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  //console.log(currentYear);
  var age = currentYear - parsedYear;
  //console.log(age);
  return age;
}
console.log(calculateAge(inputAge));

// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
console.log('Question 11');
var userNumber = window.prompt('Enter Your Phone Number', 'Enter Number Here...')

function phoneNumber(input){
  var goodNumber = [];

  var cleanedNumber = input.replace(/\D/g, '');
  console.log(cleanedNumber);

  var splitNumber = cleanedNumber.split('');

  var numberArray = splitNumber.map(Number);

  if (numberArray.length === 10){
      goodNumber.push(numberArray);
    } else if (numberArray.length === 11 && numberArray[0] === 1){
      numberArray.splice(0,1);
      goodNumber.push(numberArray);
    } else if (numberArray.length >= 11 && numberArray[0] !== 1|| numberArray.length< 10){
      goodNumber.push('bad number');
    }
  return goodNumber;
}
console.log(phoneNumber(userNumber));

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
console.log('Question 12');

// function isNumber(input){
//   var i;
//   var resultArray = [];
//
//   for (i = 0; i<input.length; i++){
//     if input.isInteger(i) === true{
//       resultArray.push('Integer');
//     } else {
//       resultArray.push('NotInteger');
//     }
//   } return resultArray;
// }
// console.log(isNumber(arrayOfAllTheThings));


// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
