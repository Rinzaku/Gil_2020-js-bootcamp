import { createSlice } from '@reduxjs/toolkit' 

let nextTodoId = 0

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action){
            const {id, text} = action.payload
            console.log(action.payload)
            state.push({id: nextTodoId++,text: action.payload, completed: false})
        },
        toggleTodo(state, action){
            const todo = state.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})


export const { addTodo } = todosSlice.actions
export const { toggleTodo } = todosSlice.actions
export default todosSlice.reducer