import React, { useState } from 'react';
import { updateArticle } from '../action/update';
import { connect } from 'react-redux';
import api from '../utils/api'
import Navbar from './Navbar'

function UpdateArticle({ props, refresh, article }) {
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
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateArticle(updateArticle);
    setUpdatedArticle({
      id: Date.now(),
      title: "",
      summary: "",
      link: "",
      image: "",
      user_id: 1,
      category: ""
    });
  };

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
    <div>
      <Navbar title="Update Article" />
      <div className="update-article">
        <form onSubmit={handleSubmit}>
          <h1>Update Article</h1>
          <input
            className="styled-input"
            type="text"
            name="title"
            placeholder="Title"
            value={updateArticle.title}
            onChange={handleChange}
          />
          <input
            className="styled-input"
            type="text"
            name="summary"
            placeholder="Summary"
            value={updateArticle.summary}
            onChange={handleChange}
          />
          <input
            className="styled-input"
            type="text"
            name="link"
            placeholder="Link"
            value={updateArticle.link}
            onChange={handleChange}
          />
          <input
            className="styled-input"
            type="text"
            name="image"
            placeholder="Image"
            value={updateArticle.image}
            onChange={handleChange}
          />
          <input
            className="styled-input"
            type="text"
            name="category"
            placeholder="Category"
            value={updateArticle.category}
            onChange={handleChange}
          />
          <button className="primary-button" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = { updateArticle };

export default connect(null, mapDispatchToProps)(UpdateArticle);
