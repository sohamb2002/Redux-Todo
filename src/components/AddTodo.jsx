import React, { useState } from 'react';
import './AddTodo.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch(addTodo({ title: todo })); // Ensure this matches the expected payload structure
            setTodo('');
        }
    };

    return (
        <div className="add-todo-container">
            <h2 className="add-todo-title">Add a New To-Do</h2>
            <form className="add-todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">
                    Add To-Do
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
