import React from "react";

// style
import '../../styles/TodoBody.css'

// display the tasks
// each task will need a delete button
// the delete button will appear only on hover

// a conditional will be needed:
// if there are tasks, list them
// otherwise, display "No task. Add a task."

const TodoBody = ({todos}) => {
	
    let renderTasks = todos.map( todo => {
        return (
            <li className="task-item">
                <span className="task">{todo.task}</span>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </button>
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
