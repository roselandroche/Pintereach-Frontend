import React, { useState } from 'react'
import api from '../utils/api'
import { postTitle } from '../action/articles'

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
        postTitle()
        console.log(`Article posted`)
        setNewArticle({
            id: Date.now(),
            title: "",
            summary: "",
            link: "",
            image: "",
            user_id: 1,
            category: ""
        })
        // api()
        //     .post('api/articles/', newArticle)
        //     .then(res => {
        //         console.log(res.data)
        //         props.history.push(`/`)
        //     })
        //     .catch(err => console.log(err))
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
                <input 
                    type='text'
                    name='link'
                    placeholder='Link'
                    value={newArticle.link}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='image'
                    placeholder='Image'
                    value={newArticle.image}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='category'
                    placeholder='Category'
                    value={newArticle.category}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddArticle;
