import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function UpdateArticle(props) {
    const [updateArticle, setUpdatedArticle] = useState({
        title: '',
        summary: ''
    })

    const handleChange = event => {
        setUpdatedArticle({
            ...updateArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        api()
            .put('api/articles/:id', updateArticle)
            .then(res => {
                console.log(res.data)
                props.history.push(`/dashboard`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={updateArticle.title}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='summary'
                    placeholder='Summary'
                    value={updateArticle.summary}
                    onChange={handleChange}
                />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateArticle
