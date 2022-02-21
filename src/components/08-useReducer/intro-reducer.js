
const initialState = {
    id: 1,
    todo: "Comprar pan",
    done: false
}

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar'){
        return [...state, action.newTodo]
    }
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Comprar leche",
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    newTodo: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos);