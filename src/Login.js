import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import validator from 'validator'
import { Redirect } from 'react-router-dom'


function Login(props) {
    const { togglestatus } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formerror, setFormError] = useState({})

    const errors = {}
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const runValidations = () => {
        if (email.length === 0) {
            errors.email = "email cannot be blank";
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email"
        }
        if (password.length === 0) {
            errors.password = "password cannot be blank"
        }
        else if (password.length < 8 && password.length < 128) {
            errors.password = "password length must be minimum of 8 to 128 characters"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        runValidations();
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const formdata = { email: email, password: password }

            axios.post('http://dct-user-auth.herokuapp.com/users/login', formdata)
                .then((response) => {

                    const result = response.data;
                    if (result.hasOwnProperty('errors')) {

                        swal('password and email does not match')

                    }
                    else {
                        localStorage.setItem("token", result.token)
                        swal("congratulations,u have successfully logged in")
                        togglestatus()
                        props.history.push('/')

                    }



                })
        }
        else {
            setFormError(errors)

            setEmail('')
            setPassword('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="card" style={{ width: '30%', marginLeft: "450px", marginTop: '100px' }}>
                    <div className="card-body">
                        <h4 style={{ textAlign: 'center' }}>Sign in</h4>

                        <div className="form-group">
                            {formerror.email ? <input type="text" className="form-control is-invalid" placeholder="Enter Email" value={email} onChange={handleEmailChange} /> : <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={handleEmailChange} />}
                            {formerror.email && <span style={{ fontSize: "12px", color: "red" }}>{formerror.email}</span>}
                        </div>
                        <div className="form-group">
                            {formerror.password ? <input type="password" placeholder="Enter password" className="form-control is-invalid" value={password} onChange={handlePasswordChange} /> : <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handlePasswordChange} />}
                            {formerror.password && <span style={{ fontSize: "12px", color: "red" }}>{formerror.password}</span>}
                        </div>


                        <input type="submit" className="btn btn-success" value="login" />

                    </div>

                </div>
            </form >
        </div >
    )

}
export default Login;
