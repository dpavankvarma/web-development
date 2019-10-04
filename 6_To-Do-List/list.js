var todos = ["test"];

var input = prompt("What would like to do?");


while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo")
        //add to todos array
        todos.push(newTodo);
    }
    var input = prompt("What would like to do?");
}

console.log("OK, YOUR QUIT THE APP");