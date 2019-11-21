import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../action/add';
import Navbar from './Navbar';


function AddArticle(props) {
    const [newArticle, setNewArticle] = useState({
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
        image: "",
        user_id: 1,
        // category_id: 1,
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
            // category_id: 1,
            category_name: ""
        })
        props.history.push('/')
    }

    return (
        <div> 
            <Navbar title="Add Article" />
            <div className="update-article">
    <h1>Add Article</h1>
            <form onSubmit={handleSubmit}>
                <input
                className="styled-input" 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={newArticle.title}
                    onChange={handleChange}
                />
                <input
                className="styled-input" 
                    type='text'
                    name='summary'
                    placeholder='Summary'
                    value={newArticle.summary}
                    onChange={handleChange}
                />
                <input
                className="styled-input" 
                    type='text'
                    name='link'
                    placeholder='Link'
                    value={newArticle.link}
                    onChange={handleChange}
                />
                <input
                className="styled-input" 
                    type='text'
                    name='image'
                    placeholder='Image'
                    value={newArticle.image}
                    onChange={handleChange}
                />
                <input
                className="styled-input" 

                    type='text'
                    name='category_name'
                    placeholder='Category Name'
                    value={newArticle.category_name}
                    onChange={handleChange}
                />
                <button className="primary-button" type='submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    postArticle
}
export default connect(null, mapDispatchToProps)(AddArticle);
