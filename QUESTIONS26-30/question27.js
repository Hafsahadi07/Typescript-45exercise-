"use strict";
// Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
let aliencolor = "Green";
if (aliencolor === "Green") {
    console.log("(Version1) you shot down Green alien you have earned 5 points");
}
else if (aliencolor === "Yellow") {
    console.log("you shot down Yellow alien you have earned 10 points");
}
else if (aliencolor === "Red") {
    console.log("you shot down Red alien you have earned 15 points");
}
//Version2
let aliencolor2 = "Yellow";
if (aliencolor2 === "Green") {
    console.log("you shot down Green alien you have earned 5 points");
}
else if (aliencolor2 === "Yellow") {
    console.log("(Version2) you shot down Yellow alien you have earned 10 points");
}
else if (aliencolor2 === "Red") {
    console.log("you shot down Red alien you have earned 15 points");
}
//Version3
let aliencolor3 = "Red";
if (aliencolor3 === "Green") {
    console.log("you shot down Green alien you have earned 5 points");
}
else if (aliencolor3 === "Yellow") {
    console.log("you shot down Yellow alien you have earned 10 points");
}
else if (aliencolor3 === "Red") {
    console.log("(Version3) you shot down Red alien you have earned 15 points");
}
