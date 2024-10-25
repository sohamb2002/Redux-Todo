import React, { useState } from 'react';
import './EditTodo.css';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from '../features/Todo/todoSlice';

function EditTodo() {
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch(updateTodo({
                id,
                title: todo,
                completed,
            }));
            setTodo('');
            navigate('/'); // Navigate to main page after successful update
        }
    };

    const completeHandler = () => {
        setCompleted(!completed); // Toggle completed state
    };

    return (
        <div className="add-todo-container">
            <h2 className="add-todo-title">Edit To-Do</h2>
            <form className="add-todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="todo-input"
                />
                <button type="button" onClick={completeHandler} className="complete-toggle">
                    {completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                </button>
                <button type="submit" className="todo-button">
                    Update To-Do
                </button>
            </form>
        </div>
    );
}

export default EditTodo;
