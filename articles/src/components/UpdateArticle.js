import React, { useState, useEffect } from "react";
import { updateArticle } from "../action/update";
import { connect } from "react-redux";
import api from "../utils/api";
import Navbar from "./Navbar";

function UpdateArticle(props) {
  const [updateArticle, setUpdatedArticle] = useState({
    id: Date.now(),
    title: "",
    summary: "",
    link: "",
    image: "",
    category_name: ""

  });

  useEffect(() => {
    const id = props.match.params.id
    api()
      .get(`/api/articles/${id}`)
      .then(res => {
        setUpdatedArticle(res.data[0])
      })
      .catch(err => console.error(err.response));
  }, []);

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
      // user_id: 1,
      category_name: ""
    });
  };

  const deleteArticle = (article) => {
    console.log(article)
    if (window.confirm("Delete this article?")) {
      api()
        .delete(`/api/articles/${article}`)
        .then(res => {
          console.log(res.data.id);
          props.history.push('/')
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

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
            name="category_name"
            placeholder="Category Name"
            value={updateArticle.category_name}
            onChange={handleChange}
          />
          <button className="primary-button" type="submit">
            Update
          </button>
          <button className="danger-button" type="danger" onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            deleteArticle(updateArticle.id)
          }}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = { updateArticle };

export default connect(null, mapDispatchToProps)(UpdateArticle);