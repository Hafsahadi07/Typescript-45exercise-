// Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.

//defining a function to print each magician name from an array.
function show_magicians(Magicians:string[]){
    Magicians.forEach(name => console.log(name));
}

//defining array containing magicians name
let magician_names = ["Aftab","Feroze","Ahmar"]

//call the function to print each name
show_magicians(magician_names);


