// Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
let transportation = ["sportsbike","fortunercar","brv"];
transportation.map((items)=> console.log(`I would like to own a ${items}`));


// Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
//print a message to each person, inviting them to dinner.
let guestlist = ["Hamna","Javeria","Tameen","Sareena"];
guestlist.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to have dinner with me this weekend?`)); 