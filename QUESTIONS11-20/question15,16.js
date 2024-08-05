// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
//out a new set of invitations. You’ll have to think of someone else to invite.• Start with your program from
//Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are 
//inviting  • Print a second set of invitation messages, one for each person who is still in your list.
var Guestlist = ["Hamna", "Javeria", "Tameen", "Sareena"];
var cannotattend = Guestlist[0];
console.log(cannotattend + " " + "can not attend the dinner");
Guestlist.splice(0, 1, "Saima");
Guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ",Would you like to have dinner with me this weekend?")); });
// Q16. More Guests:You just found a bigger dinner table,so now more space is available.Think of three more guests
//to invite to dinner.Start with your program from Exercise 15. Add a print statement to the end of your program
//informing people that you found a bigger dinner table. Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
//creating a guestlist array
var guestlist = ["Hamna", "Javeria", "Tameen", "Sareena"];
//making variable for not attending guest
var Cannotattend = guestlist[0];
//print the name of guest who can't come
//console.log(Cannotattend + " " + "can not attend the dinner");
//add or remove guest from guestlist array
guestlist.splice(0, 1, "Saima");
//new message for bigger table
console.log("Good news! we have found a bigger dinner table");
//adding new guest of at starting index of array
guestlist.unshift("Ali");
//get a middle index of guestlist array
var middleindex = Math.floor(guestlist.length / 1.5);
//adding new guest at middle index of array
guestlist.splice(middleindex, 0, "Aroom");
//adding a new guest at ending index of an array
guestlist.push("Insharah");
//print message
console.log("updated list of our guests");
guestlist.forEach(function (Oneguest) { return console.log("Hello! ".concat(Oneguest, ", Would you like to come this weekend for dinner")); });
