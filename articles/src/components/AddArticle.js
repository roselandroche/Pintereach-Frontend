import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../action/add';

function AddArticle(props) {
    const [newArticle, setNewArticle] = useState({
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
        image: "",
        user_id: 1,
        category_id: "",
        category_name: ""
    })

    const handleChange = event => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.postArticle(newArticle)
        setNewArticle({
            id: Date.now(),
            title: "",
            summary: "",
            link: "",
            image: "",
            user_id: 1,
            category_id: "",
            category_name: ""
        })
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
                    value={newArticle.category_name}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    postArticle
}
export default connect(null, mapDispatchToProps)(AddArticle);
