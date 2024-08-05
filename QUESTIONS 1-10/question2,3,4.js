// Q2. Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personname = "hafsahadi";
console.log("hello", personname, "i am here to learn some typescript today");
// Q3.Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
var Personname = "hafsa";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
console.log(Personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Q4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
