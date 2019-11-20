import React, { useState } from 'react'
import api from '../utils/api'

function AddArticle(props) {
    const [newArticle, setNewArticle] = useState({
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
        image: "",
        user_id: 1,
        category: ""
    })

    const handleChange = event => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        api()
            .post('api/articles/', newArticle)
            .then(res => {
                console.log(res.data)
                props.history.push(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <label>Add Article</label>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={newArticle.title}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='summary'
                    placeholder='Summary'
                    value={newArticle.summary}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddArticle;
