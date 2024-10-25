import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: nanoid(), title: 'Sample Todo', completed: false },
        { id: nanoid(), title: 'Another Todo', completed: true },
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            if (index > -1) {
                state.todos.splice(index, 1);
            }
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index > -1) {
                state.todos[index] = {
                    ...state.todos[index],
                    title: action.payload.title,
                    completed: action.payload.completed,
                };
            }
        },
    },
});

// Selector
export const selectTodos = (state) => state.todos.todos;

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
