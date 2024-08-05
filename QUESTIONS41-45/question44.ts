// Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, and it
//should print a summary of the sandwich that is being ordered.Call the function three times, using a
//different number of arguments each time.
function makeSandwich(...items:string[]){
    console.log("Making a sandwich with following items: \n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\n Now enjoy sandwich")
}

//calling function with three different numbers of arguments;
makeSandwich("Mayo","Egg","Chicken");

makeSandwich("Coleslaw","Egg","Butter");

makeSandwich("Cheese","Mayo","Cucumber","Lettuce","Egg","Ketchup")