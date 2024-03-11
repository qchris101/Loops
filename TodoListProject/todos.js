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

let input = prompt("What would you like to do")
const todo = ['feed fish','change dog food']

while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        for( let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
    } else if (input === 'new'){
        const newTodo = prompt("Enter the task!")
        todo.push(newTodo)
        console.log(`Okay! ${newTodo} has been added to the list!`)
    } else if (input === 'delete'){
        const index = parseInt(prompt("Okay what index would you like to delete?"))
        if(!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1)
            console.log(`Okay deleted ${deleted[0]}`)
        } else {
            console.log("Unknown Index")
        }
    }
    input = prompt("What would you like to do?")
}

console.log("Quit confirmed Exiting!")