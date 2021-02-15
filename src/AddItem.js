import React from 'react'
import Form from './Form'
import axios from 'axios'
const AddItem = (props) => {
    const { addtask } = props
    const formSubmit = (task) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', task, { 'headers': { 'x-auth': localStorage.getItem('token') } })
            .then((response) => {
                addtask(response.data)
            })
    }
    return (
        <div>
            <Form formSubmit={formSubmit} />

        </div>
    )
}
export default AddItem