import React, { useState } from 'react';
import { updateArticle } from '../action/update';
import { connect } from 'react-redux';
import api from '../utils/api'

function UpdateArticle({ props, refresh, article }) {
    const [updateArticle, setUpdatedArticle] = useState({
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
        image: "",
        user_id: 1,
        category: ""
    })

    const handleChange = event => {
        setUpdatedArticle({
            ...updateArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        // props.updateArticle(updateArticle)
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

    const deleteArticle = (article) => {
        if (window.confirm('Delete this article?')) {
            api().delete('/api/articles/:id')
            .then(refresh())
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <>
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
                    type='text'
                    name='category'
                    placeholder='Category'
                    value={updateArticle.category}
                    onChange={handleChange}
                />

                <span>
                    <span className="delete" onClick={e => {
                        e.stopPropagation();
                        deleteArticle(article)
                    }
                }>
                </span>
                </span>
                <button type='submit'>Update</button>
            </form>
        </div>
        </>
    )
}

const mapDispatchToProps = {updateArticle}

export default connect(null, mapDispatchToProps)(UpdateArticle)
