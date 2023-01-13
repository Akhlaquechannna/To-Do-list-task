import inquirer from "inquirer";

let Todos: string[] = [];
let loop = true;

while(loop){
    const answers: {
        todo: string,
        admore: boolean
    }= await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add in your todo "
        },
        {
            type: "confirm",
            name: "admore",
            message: "Do you want to add more todo? ",
            default: false
        },
    ])

const {todo, admore} = answers;
console.log(answers);

loop = admore
if(todo){
    Todos.push(todo)

}else{
    console.log("kindly add valid input");
    
    }
}
if (Todos.length > 0 ){
    console.log("your todo list:")
    
    Todos.forEach(todo => {
        console.log(todo);
        
    })

}else{
    console.log("no Todos found");
    
}
