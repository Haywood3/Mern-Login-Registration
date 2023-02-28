import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const UserInfo = () => {
    const [firstName, setFirstName] = useState()
    const [id, setId] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getUser/`, { withCredentials: true })
            .then(res => {
            setFirstName(res.data.firstName)
            setId(res.data._id)
            setEmail(res.data.email)
        })
            .catch()
    }, [])

    return (
        <div>
            <p>
            <Link to="/logout"> Log Out</Link>
            </p>
            <div> 
                <h1>Hello, {firstName} You are logged in!!!</h1>
                <h1> Email: {email}</h1> 
                <h1> Id: {id}</h1>
            </div>
        </div>
    )
}

export default UserInfo