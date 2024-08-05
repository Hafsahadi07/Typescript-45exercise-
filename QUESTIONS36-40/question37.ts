// Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//and a shirt of any size with a different message.
function make_shirt(size: string = "Large",message:string ="I love typescript"){
    console.log(`Creating a ${size} shirt with ${message} prints on shirt`)
}
make_shirt();

//medium shirt with the default message
make_shirt("Medium");

//shirt of any size with a different message
make_shirt("ExtraLarge","I love programming");
