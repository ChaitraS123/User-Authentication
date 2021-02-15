import axios from 'axios'
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { BsFillTrashFill } from 'react-icons/bs';
import { BiShow } from 'react-icons/bi';


const TaskItem = (props) => {
    const { body, id, title, removeTask } = props
    const [user, setUser] = useState({})
    console.log(body, id, title)
    const removeTitle = (id) => {
        const confirmremove = window.confirm('are u sure')
        if (confirmremove) {
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, { 'headers': { 'x-auth': localStorage.getItem('token') } })
                .then((response) => {
                    const result = response.data;
                    removeTask(result._id)
                })

        }

    }
    const showTitle = (id) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, { 'headers': { 'x-auth': localStorage.getItem('token') } })
            .then((response) => {
                const result = response.data
                swal(`Title-${result.title}\n Body-${result.body}`)
            })


    }
    return (
        <div className="card " style={{ width: "50%", margin: '5px' }}>
            <div className="card-body">
                <h1>Title-{title}</h1>

                <button className="btn btn-danger" onClick={() => { removeTitle(id) }}><BsFillTrashFill /></button>
                <button className="btn btn-primary" onClick={() => { showTitle(id) }}><BiShow /></button>


            </div>


        </div>
    )
}
export default TaskItem 