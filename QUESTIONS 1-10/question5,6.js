// Q5. Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
var Famous_person = "Albert Einstein";
var Message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(Famous_person, Message);
// Q6. Stripping Names:Store a person’s name and include some whitespace characters at the beginning and end of 
//the name. Make sure you use each character combination, "\t"(for space) and "\n"(for new line), at least once. 
//Print the name once,so the whitespace around the name is displayed. Then print the name after striping the 
//white spaces.
var Whitespace = "\n\t hafsa hadi \t\n";
console.log(Whitespace);
var Withoutwhitespace = Whitespace.trim();
console.log(Withoutwhitespace);
