import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from '../features/Todo/todoSlice';
import { useNavigate } from 'react-router-dom';

function Todos() {
    // Select todos from state
    const todos = useSelector(selectTodos);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Debugging: Log the todos
    console.log('Todos:', todos); // Check what todos contains

    return (
        <div className="todos-container">
            <h1>The todos are:</h1>
            <ul>
                {Array.isArray(todos) && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <h3>Is completed? {todo.completed ? 'Yes' : 'No'}</h3>
                            <button onClick={() => navigate(`/edit/${todo.id}`)}>Update</button>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>
                                Remove Todo
                            </button>
                        </li>
                    ))
                ) : (
                    <li>No todos available.</li>
                )}
            </ul>
        </div>
    );
}

export default Todos;
