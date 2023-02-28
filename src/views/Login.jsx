import React, { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
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
        axios.post(`http://localhost:8000/api/getUser`, user, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <div>
                <h1>LogIn</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div>
                    <div>Don't have an account? <Link to="/register">Register Here</Link></div>
                </div>
            </form>
        </div>
    )
}
export default Login