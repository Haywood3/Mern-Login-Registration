import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Cookie = () => {
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cookie`, { withCredentials: true })
            .then(res => console.log("success"))
            .catch()
    })
    return (
        
        <div>
            <h1>Cookie</h1>
           <Link to="/">Login Here</Link>
        </div>
    )
}

export default Cookie