// Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
//defining a function to print each magician name from an array.
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
//defining array containing magicians name
var magician_names = ["Aftab", "Feroze", "Ahmar"];
//call the function to print each name
show_magicians(magician_names);
