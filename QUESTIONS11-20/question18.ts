// Q18. Seeing the World: Think of at least five places in the world you’d like to visit• Store the locations
//in a array. Make sure the array is not in alphabetical order• Print your array in its original order• Print
//your array in alphabetical order without modifying the actual list• Show that your array is still in its
//original order by printing it• Print your array in reverse alphabetical order without changing the order of
//the original list• Show that your array is still in its original order by printing it again• Reverse the 
//order of your list. Print the array to show that its order has changed.• Reverse the order of your list again.
//Print the list to show it’s back to its original order• Sort your array so it’s stored in alphabetical order.
//Print the array to show that its order has been changed• Sort to change your array so it’s stored in reverse
//alphabetical order. Print the list to show that its order has changed.
let favplaces: string[]=["Dubai","Canada","Turkey","SaudiArabia","Egypt"];
console.log(favplaces);

//printing array in alphabetic order.
console.log("Alphabetical order:", [...favplaces].sort());

//array still in original order
console.log("still in original order:",favplaces);

//printing array in reverse alphabetical order
console.log("Reverse order:",[...favplaces].reverse());

//array still in original order
console.log("still in original order:",favplaces);

//printing array to show its order has been changed.
console.log("original array reversed:",favplaces.reverse());

//reversing again and printing to show it's back in original order.
console.log("Back to original order:",favplaces.reverse());

//sort and printing the array in Alphabetical order to show it has been changed.
console.log("Sorted in Alphabetical Order",favplaces.sort());


//sort and printing the array in Reverse Alphabetical order to show it has been changed.
console.log("Sorted in Reverse alphabetical order",favplaces.reverse());