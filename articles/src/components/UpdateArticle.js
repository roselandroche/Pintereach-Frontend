import React, { useState } from 'react';
import { updateArticle } from '../action/update';
import { connect } from 'react-redux'

function UpdateArticle(props) {
    const [updateArticle, setUpdatedArticle] = useState({
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
        image: "",
        user_id: 1,
        category_name: "",
        category_id: 1
    })

    const handleChange = event => {
        setUpdatedArticle({
            ...updateArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateArticle(updateArticle)
        setUpdatedArticle({
            id: Date.now(),
            title: "",
            summary: "",
            link: "",
            image: "",
            user_id: 1,
            category: ""
        })
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <label>Update Article</label>
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
                <input 
                    type='text'
                    name='link'
                    placeholder='Link'
                    value={updateArticle.link}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='image'
                    placeholder='Image'
                    value={updateArticle.image}
                    onChange={handleChange}
                />
                <input 
                    type='number'
                    name='user_id'
                    placeholder='User Id'
                    value={updateArticle.user_id}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='category'
                    placeholder='Category'
                    value={updateArticle.category}
                    onChange={handleChange}
                />
                <input 
                    type='number'
                    name='category_id'
                    placeholder='Category Id'
                    value={updateArticle.category_id}
                    onChange={handleChange}
                />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {updateArticle}

export default connect(null, mapDispatchToProps)(UpdateArticle)
