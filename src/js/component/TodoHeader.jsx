import React from "react";

//style
import '../../styles/TodoHeader.css'

// title
// input textbox
// button to add tasks

// controlled input
// text validation

const TodoHeader = () => {
	return (
		<>
            <header className="header">
                <h1>todos</h1>
                <input 
                    className="task-input"
                    type="text"
                    placeholder="What needs to be done?"
                    // value=""
                    // onChange={() => write in the task}
                />
                <button
                    // onClick={() => validate, then add the task}
                >
                    Add Task
                </button>
            </header>
		</>
	);
};

export default TodoHeader;
