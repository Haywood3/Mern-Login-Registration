import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const UserInfo = () => {
    const [firstName, setFirstName] = useState()
    const [id, setId] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getUser`, { withCredentials: true })
            .then(res => {
                setFirstName(res.data.firstName)
                setId(res.data._id)
                setEmail(res.data.email)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <h3>Hello, {firstName} </h3>
            <h3>Your Email: {email}</h3>
            <h3>Your Id: {id}</h3>
            <p>
                <Link to="/logout"> Log Out</Link>
            </p>
        </div>
    )
}

export default UserInfo