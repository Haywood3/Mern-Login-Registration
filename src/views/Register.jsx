import React, { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"

const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name </label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="Min 2 characters" />
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Min 2 characters" />
                </div>
                <div>
                    <label>Email </label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Please enter valid email" />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Min 8 characters" />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Passwords must match" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
                </div>
                <div>
                    <div>Already have an account? <Link to="/">Login Here</Link></div>
                </div>
            </form>
        </div>
    )
}
export default Register