//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a Number"));
alert(guess);

//check if guess is right
if (guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}
// //otherwise you got wrong
// else {
//     alert("YOU GOT IT WRONG!");
// }
//otherwise, check if guess is higher
else if(guess > secretNumber){
    alert("Too high. Guess again!");
}
else {
    alert("Too low. Guess again!");
}
//otherwise, check if lower
// else if(guess < secretNumber){
//     alert("Too low. Guess again!");
// }