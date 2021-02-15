import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AddItem from './AddItem'
import TaskList from './TaskList'

const Note = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', { headers: { 'x-auth': localStorage.getItem('token') } })
            .then((response) => {
                setTasks(response.data)
            })
    }, [])
    const addtask = (task) => {
        setTasks([...tasks, task])
    }
    const removeTask = (id) => {
        const result = tasks.filter((task) => {
            return task._id !== id
        })
        setTasks(result)
    }
    return (
        <div >

            <div className="row">
                <div className="col-md-6">
                    <TaskList tasks={tasks} removeTask={removeTask} />
                </div>
                <div className="col-md-6">
                    <AddItem addtask={addtask} />
                </div>
            </div>
        </div>
    )
}
export default Note