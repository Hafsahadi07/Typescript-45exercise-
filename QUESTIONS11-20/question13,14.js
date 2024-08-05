// Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
var transportation = ["sportsbike", "fortunercar", "brv"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
//print a message to each person, inviting them to dinner.
var guestlist = ["Hamna", "Javeria", "Tameen", "Sareena"];
guestlist.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", Would you like to have dinner with me this weekend?")); });
