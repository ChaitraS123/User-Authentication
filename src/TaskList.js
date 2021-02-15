import React from 'react'
import TaskItem from './TaskItem'
const TaskList = (props) => {
    const { tasks, removeTask } = props
    console.log(tasks)
    return (
        <div>
            {tasks.length === 0 ? <div><h1>There are no titles found</h1>
                <h3>Please Add task</h3>
            </div> : <div>
                    <h3>Total titles-{tasks.length}</h3>
                    {/* {tasks.map((task,i) => {
                    return <TaskItem key={i} {} />
                })} */}
                    {tasks.map((task, i) => {
                        return <TaskItem key={task._id} id={task._id} body={task.body} title={task.title} removeTask={removeTask} />
                    })}
                </div>}


        </div>
    )
}
export default TaskList