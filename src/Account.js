import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
function Account(props) {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', { 'headers': { 'x-auth': localStorage.getItem('token') } })
            .then((response) => {
                setUser(response.data)
            })

    }, [])



    return (
        <div>
            {Object.keys(user).length > 0 ? <div className="card border-primary" style={{ width: "30%", marginLeft: '400px', marginTop: '100px' }}>
                <div className="card-body">
                    <p>Name:{user.username}</p>
                    <p>id:{user._id}</p>
                    <p>Email:{user.email}</p>
                    <p>Created at:{user.createdAt}</p>
                </div>

            </div> : ''}

        </div>
    )
}
export default Account