import axios from 'axios'
import React, { useState } from 'react'
import validator from 'validator'
import swal from 'sweetalert'
function Register(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState({})
    const [formErrors, setFormErrors] = useState('')
    const errors = {}
    const handleChange = (e) => {
        const attr = e.target.name;
        if (attr === "username") {
            setUsername(e.target.value)
        }
        else if (attr === "email") {
            setEmail(e.target.value)
        }
        else if (attr === "password") {
            setPassword(e.target.value)
        }
    }
    const runValidation = () => {
        if (username.length === 0) {
            errors.name = "name cannot be blank"
        }
        else if (username.length < 5) {
            errors.name = "name charcters must be more than 5"
        }
        if (password.length === 0) {
            errors.password = "password cannot be blank"
        }
        else if (password.length < 8 && password.length > 128) {
            errors.password = "password length should be between 8 to 128 characters"
        }
        if (!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        runValidation();
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formdata = { username: username, email: email, password: password }

            axios.post('http://dct-user-auth.herokuapp.com/users/register', formdata)
                .then((response) => {

                    const result = response.data
                    if (result.hasOwnProperty('errors')) {
                        alert(result.message)
                    }
                    else {
                        swal('Congratulations!!!you have successfully registered')
                        props.history.push('/login')
                    }

                })
        }
        else {
            setFormErrors(errors)
            setUsername('')
            setEmail('')
            setPassword('')

        }
    }

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Register with us</h3>

            <form onSubmit={handleSubmit}>
                <div className="card mb-3" style={{ width: "30%", left: "35%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            {formErrors.name ? <input type="text" className='form-control is-invalid' placeholder="Enter username" name="username" value={username} onChange={handleChange} /> :
                                <input type="text" className="form-control" placeholder="Enter username" name="username" value={username} onChange={handleChange} />
                            }


                            {formErrors.name && <span style={{ fontSize: "10px", color: "red" }}>{formErrors.name}</span>}

                        </div><br />
                        <div className="form-group">
                            {formErrors.email ? <input type="text" className='form-control is-invalid' placeholder="Enter Email" name="email" value={email} onChange={handleChange} /> :
                                <input type="text" className='form-control' placeholder="Enter Email" name="email" value={email} onChange={handleChange} />}
                            {formErrors.email && <p style={{ fontSize: "10px", color: "red" }}>{formErrors.email}</p>}

                        </div><br />
                        <div className="form-group">
                            {formErrors.password ? <input type="password" className="form-control is-invalid" placeholder="Enter password" name="password" value={password} onChange={handleChange} /> :
                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={handleChange} />}
                            {formErrors.password && <p style={{ fontSize: "10px", color: "red" }}>{formErrors.password}</p>}

                        </div><br />
                        <input type="submit" className="btn btn-success " value="register" />



                    </div>


                </div>
            </form>

        </div>
    )
}
export default Register