// Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner
//and you have space for only two guests• Start with your program from Exercise 16. Add a new line that
//prints a message saying that you can invite only two people for dinner• Remove guests from your list one at
//a time until only two names remain in your list. Each time you pop a name from your list, print a message to
//that person letting them know you’re sorry you can’t invite them to dinner• Print a message to each of the
//two people still on your list, letting them know they’re still invited• Remove the last two names from your
//list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of
//your program.

let guestlist =["Hamna","Javeria","Tameen","Sareena"];
//making variable for not attending guest
let Cannotattend = guestlist[0];
//add or remove guest from guestlist array
guestlist.splice(0,1,"Saima");

//new message for bigger table
console.log("Good news! we have found a bigger dinner table");
//adding new guest of at starting index of array
guestlist.unshift("Ali");

//get a middle index of guestlist array
let middleindex:number = Math.floor(guestlist.length/1.5)

//adding new guest at middle index of array
guestlist.splice(middleindex,0,"Aroom");

//adding a new guest at ending index of an array
guestlist.push("Insharah");

//print message
console.log("updated list of our guests");
guestlist.forEach(Oneguest => console.log(`Hello!${Oneguest}, Would you like to come this weekend for dinner`))

//Informing only two guest invited
console.log("Unfortunately, the dinner table won't arrive on time, so i can invite only two people for dinner");

while(guestlist.length > 2){
    let removeguest = guestlist.pop();
    console.log(`Sorry, ${removeguest} i am cancelling the dinner for some personal reason `)
}
//printinf final message
console.log("Invitation to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`You ${lasttwo}, still invited to dinner`));
//removing last two guest
guestlist.pop();
guestlist.pop();

console.log("Empty List", guestlist);
