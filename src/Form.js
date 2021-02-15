import React, { useState, useEffect } from 'react'
const Form = (props) => {
    const { formSubmit } = props
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { title: title, body: body }
        formSubmit(formData)
        setTitle('')
        setBody('')


    }
    return (
        <div>
            <div className="card border-primary" style={{ width: "60%", height: "80%", marginTop: '60px' }}>
                <div className="card-body">
                    <h1>Add a note</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label><br />
                        <input type="text" value={title} onChange={handleTitleChange} /><br />
                        <label>Body</label><br />
                        <input type="text" value={body} onChange={handleBodyChange} /><br /><br />
                        <input type="submit" className="btn btn-primary" value="save" />
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Form