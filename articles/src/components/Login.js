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
                localStorage.setItem('token', res.data.token)
                props.history.push('/')
            })
            .catch(err => {
                setError(err.res)
            })
    }

    return (
        <div className="login">
            <h1>Welcome to Pintereach</h1>
            <img width="300px" src="img/login-illustration.svg" alt="lighthouse illustration" />
        <form onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}
            <input className="styled-input" type='text' name='username' placeholder="Username" value={status.username} onChange={handleChange} />
            <input className="styled-input" type='password' name='password' placeholder="Password" value={status.password} onChange={handleChange} />

            <button className="primary-button" type='submit'>Login</button>
        </form>
        </div>

    )
}

export default Login

// This gives the user an authentication token once signed in.
