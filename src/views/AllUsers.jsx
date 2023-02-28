import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const AllUsers = () => {

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allUsers/`, { withCredentials: true })
        .then(res => {
        })
        .catch(err => console.log(err))
}, [])

    return (
        <div>
            <h1>All Users</h1>
            <p>
                <Link to="/logout"> Log Out</Link>
            </p>
        </div>
    )
}

export default AllUsers