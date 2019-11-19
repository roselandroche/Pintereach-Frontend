import React, { useState } from 'react';
import api from '../utils/api';


function Login(props) {
    const [error, setError] = useState()
    const [status, setStatus] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        setStatus({
            ...status,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        api()
            .post("/api/auth/login", status)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/')
            })
            .catch(err => {
                setError(err.res)
            })
    }

    return (
        <>
            <h1>Welcome to Pintereach!</h1>
            <form onSubmit={handleSubmit}>
                {error && <div className='error'>{error}</div>}
                <input type='text' name='username' placeholder="Username" value={status.username} onChange={handleChange} />
                <input type='password' name='password' placeholder="Password" value={status.password} onChange={handleChange} />

                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login

// This gives the user an authentication token once signed in.
