import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// get info from API : axios
//get info when the component is mounted: useEffect
// variable change: useState

const TestPage = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/test`)
            .then(response => {
                console.log(response)
                setMessage(response.data.message)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>Message Test : {message} </p>
            <div>
                <Link to="/">Login Here</Link>
            </div>
        </div>
    )
}

export default TestPage