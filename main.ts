import axios from 'axios'

let url = "https://jsonplaceholder.typicode.com/todos/15";

interface Todo {
 id:number;
 title:string;
 completed:boolean;
}


axios.get(url).then(response=>{
    const todo = response.data as Todo;
    showTodo(todo)
})

const showTodo =  (todo:Todo) =>{
    console.log(`Todo id= ${todo.id}
    text: ${todo.title}
    completed: ${todo.completed}`);
}

