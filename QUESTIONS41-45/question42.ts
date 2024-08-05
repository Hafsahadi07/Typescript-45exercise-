// Q42. Great Magicians: Start with a copy of your program from Exercise 39.Write a function called make_great()
//that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.
function show_magicians(Magicians:string[]){
    Magicians.forEach(name => console.log(name));
}

//function through map to modify
function make_great(magicians:string[]){
   return magicians.map(name =>`The Great ${name}`)
}

//defining array containing magicians name
let magician_names = ["Aftab","Feroze","Ahmar"];

//calling the functions
let greatmagicians =make_great(magician_names);
show_magicians(greatmagicians);
