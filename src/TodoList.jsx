import React, {useState} from 'react';

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask (event.target.value)
    }

    function addTask() {

        if( newTask.trim() !== " ") {
            setTasks( (prevState)=> [...prevState, newTask] )
            setNewTask(" ");
        }

       
    }

    function deleteTask(index) {

        const updatedTask = tasks.filter( (_, i)=> i !== index)
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if( index > 0) {

            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index -1]] = [ updatedTask[index - 1], updatedTask[index]]

            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {

        if(index < tasks.length - 1) {

            const updatedArray = [...tasks];

            [ updatedArray[index + 1], updatedArray[index] ] = [ updatedArray[index], updatedArray[index + 1] ]

            setTasks(updatedArray)
        }
    }


    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
           
           <div>
            <input 
                    type='text'
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                className='add-button'
                onClick={addTask}
                >
                    Add
                </button>
           </div>

           <ol>
            {tasks.map( (item, index)=> 

            <li key={index}>
                <span className='text'>{item}</span>
                <button onClick={()=> deleteTask(index)} className='delete-button'>
                    Delete
                </button>

                <button onClick={()=> moveTaskUp(index)} className='move-button'>
                    👆
                </button>

                <button onClick={()=> moveTaskDown(index)} className='move-button'>
                    👇
                </button>
            </li>

            )}
           </ol>


        </div>
    )
}

export default TodoList;