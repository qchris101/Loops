// let input = prompt('what would you like to do?');
// const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*****************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*****************')
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Ok, enter an index to delete:'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok, deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown index')
//         }
//     }
//     input = prompt('what would you like to do?')
// }
// console.log('OK QUIT THE APP!')

let input = prompt("What would you like to do") // variable named input takes a prompt from the user 
const todos = ['feed fish','change dog food'] // A variable with and array with 2 index's as a placeholder for the user to push in new to-do's.
while (input !== 'quit' && input !== 'q') {// while input does not equal 'quit' and 'q' continue.
    if(input === 'list') {                 //if the users input is equal to 'list' then continue to execute.
        for( let i = 0; i < todos.length; i++){ // for as long of the todo list length, 
            console.log(`${i}: ${todos[i]}`)//iterate through our todo list at the i [ 0: Feed Fish, 1: change dog food]
        }
    } else if (input === 'new'){      // if the input is 'new' execute
        const newTodos = prompt("Enter the task!") // newTodos variable is created to hold users input value by prompting
        todos.push(newTodo)                       // .push our newTodo into our already created array todos
        console.log(`Okay! ${newTodos} has been added to the list!`)  // Verify its been pushed
    } else if (input === 'delete'){                                   // if the prompt it 'delete' execute
        const index = parseInt(prompt("Okay what index would you like to delete?")) // new variable index which parses the input into an integer since we need to reference an index.
        if(!Number.isNaN(index)) {                                     // if it does not equal NaN then execute
            const deleted = todos.splice(index, 1)             // variable deleted  contains a splice referencing our index prompt and to remove 1 index from our array.
            console.log(`Okay deleted ${deleted[0]}`)         //verify its been deleted print the deleted variable that references our selected input
        } else {                                             // if no other condition is met execute
            console.log("Unknown Index")                    // a response to the user
        }
    }
    input = prompt("What would you like to do?")   // resets the loop to continue listing,deleting or adding to the Todo's List.
}

console.log("Quit confirmed Exiting!") // executes once the while loop is ending by input === 'quit'