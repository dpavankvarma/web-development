var todos = ["test"];

var input = prompt("What would like to do?");


while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log("***********");
        todos.forEach(function(todo, i) {
        console.log(i + " " + todo);
       });
       console.log("***********");
    } 
    else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo")
        //add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
    }
    else if (input === "delete") {
        //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        
        //delete that todo
        todos.splice(index,1);
        console.log("Deleted Todo");
    }
    // ask again for new input
    var input = prompt("What would like to do?");
}

console.log("OK, YOUR QUIT THE APP");