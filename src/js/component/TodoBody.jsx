import React, { useEffect, useState } from "react";

// style
import '../../styles/TodoBody.css'

const TodoBody = ({todos, setTodos}) => {
	
    // useEffect -> allows us to synchronize a component with an external system
    // We can use useEffect to make a fetch call and retrieve our todo list

    // useEffect has 2 parameters (callback function, dependency array)
    // the callback function will be where we use our fetch call and process the response
    // the dependency array is used to determine how the browser will rerender information

    // this useEffect triggers on initial loading and
    // when the todos state variable updates.
    useEffect(() => {
        // GET todos
        fetch('https://playground.4geeks.com/todo/users/rickr')
        .then(response => response.json())
        .then(data => {
            setTodos(data.todos)
        })
        .catch(error => console.log("Error: ", error))
    }, [])

    // deleteTask now will remove the todo from the playground
    const deleteTask = async (selectedTodoId) => {
        let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
        setTodos(updatedTodos);
        
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${selectedTodoId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log('Error: ', response.status, response.statusText);
            return {
                error: {
                    status: response.status, 
                    statusText: response.statusText
                }
            }
        }
    }

    let renderTasks = todos.map(todo => {
        return (
            <li key={todo.id} className="task-item">
                <span className="task">{todo.label}</span>
                <span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        fill="currentColor" 
                        className="bi bi-trash-fill" 
                        viewBox="0 0 16 16"
                        onClick={() => deleteTask(todo.id)}
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </span>
            </li>
        );
    })
        
    return (
		<>
            <section className="main">
                <ul className="task-list">
                    {todos.length !== 0 ? renderTasks : "No tasks. Add a task."}
                </ul>
            </section>
		</>
	);
};

export default TodoBody;
