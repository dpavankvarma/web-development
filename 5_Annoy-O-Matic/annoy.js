// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yay") {
//      answer = prompt("Are we there yet?");
// }

// alert("YAY, we made it");

// Version 2

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") == -1) {
     answer = prompt("Are we there yet?");
}

alert("YAY, we made it");