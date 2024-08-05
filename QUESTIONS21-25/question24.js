"use strict";
// Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.If you want to try
//more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let apple = "apple";
//test for equality and inequality for strings
console.log("Is apple equal to apple");
console.log(apple == "apple");
console.log("\n Is apple not equal to apple ");
console.log(apple != "apple");
//test using the lowercase situation
let uppercaseApple = "APPLE";
console.log("Is APPLE equal to after converting t lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE equal to after converting t lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//and less than or equal to. 
let fifteen = 15;
let twenty = 20;
console.log("\n Is fifteen equals to twenty");
console.log(fifteen == twenty);
console.log("\n Is fifteen not equals to twenty");
console.log(fifteen != twenty);
console.log("\n Is fifteen greater than one");
console.log(fifteen > 1);
console.log("\n Is fifteen greater than or equal to five");
console.log(fifteen >= 5);
console.log("\n Is fifteen is less than one");
console.log(fifteen < 1);
console.log("\n twenty is less than or equals to fifteen");
console.log(twenty <= 15);
//Tests using "and" and "or" operators
console.log("\n twenty is not equals to fifteen and twenty is greater than fifteen");
console.log(twenty != 15 && twenty > 15);
console.log("\n twenty is not equals to fifteen and twenty is greater than fifteen");
console.log(twenty != 15 && twenty > 30);
console.log("\n 20 is greater than 50 OR 20 is equals to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equals to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is in a array
let fruits = ["Apple", "Cherry", "Banana", "Chiku"];
console.log("Is chiku include in fruits array?");
console.log(fruits.includes("Chiku"));
//Test whether an item is not in a array
console.log("Is chiku not include in fruits array?");
console.log(!fruits.includes("Chiku"));
