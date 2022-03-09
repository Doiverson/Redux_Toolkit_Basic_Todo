import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {

        addTodo: (state, action) => {
            state.push(action.payload.todo)
        },

        deleteTodo: (state, action) => {
            return state.filter((x, i) => i !== action.payload.index);
        },

        editTodo: (state, action) => {
            state[action.payload.index] = action.payload.todo;
        },
    }
})

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer