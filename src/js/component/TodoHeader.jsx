import React, { useState } from "react";

//style
import '../../styles/TodoHeader.css'

const TodoHeader = ({todos, setTodos}) => {
	const [newTask, setNewTask] = useState("");
    // removed the counterId since the playground 
    // now creates the id for each todo

    // we will use a regular function instead of a useEffect
    // to post the new task so that we can call the function
    const postNewTask = async (todoObject) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(todoObject),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch('https://playground.4geeks.com/todo/todos/rickr', options)
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
    
    const addTask = () => {

        // rekeyed the todo object to correcly reflect on the playground
        let newTodoObject = {
            label: newTask,
            is_done: false
        };
        
        // we still update todos here so that the state
        // updates and the useEffect (in TodoBody) with 
        // the fetch GET triggers
        const newTodos = [...todos, newTodoObject];
        setTodos(newTodos);

        // here is the new function call to POST the new todo
        postNewTask(newTodoObject);
    }

    const checkTextBox = () => {
        let textBox = document.querySelector(".task-input");
        if (textBox.value === "") {
            alert("Please add a task.")
        } else {
            addTask();
            setNewTask("");
        }
    }

    return (
		<>
            <header className="header">
                <h1>todos</h1>
                <input 
                    className="task-input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                />
                <button
                    onClick={checkTextBox}
                >
                    Add Task
                </button>
            </header>
		</>
	);
};

export default TodoHeader;
