import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    
    return (
        <div>
            <h1>Error</h1>
            <div>
                <Link to="/">Login Here</Link>
            </div>
        </div>
    )
}

export default ErrorPage