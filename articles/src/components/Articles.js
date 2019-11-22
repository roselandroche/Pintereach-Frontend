import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../action/articles";
import Navbar from "./Navbar";
import api from "../utils/api";

function Articles(props) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    const id = props.match.params.id;

    api()
      .get(`/api/articles/${id}`)
      .then(res => {
        console.log(res);

        // const result = res.data.filter(article => id === res.data.id);
        console.log(res);
        setArticle(res.data[0]);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      <Navbar title="Article" />
      <div className="article-container">
        <div className="article-div">
          <img className="article-image" src={article.image} alt="" />
        </div>
        <div className="article-information">
          <h3 className="article-title">{article.title}</h3>
          <button className="book-button">Book</button>
          <p className="summary">{article.summary} </p>

          <div className="article-buttons">
            <button className="primary-button">Read</button>
            <button className="secondary-button">Edit</button>
            <div className="divider" />
          </div>
        </div>
      </div>
    </div>

    //  {props.isTitleLoading ? (
    //     <div className='spinner' />
    // )}
  );
}

function mapStateToProps(state) {
  return {
    // isTitleLoading: state.title.isLoading
  };
}

const mapDispatchToProps = {
  // addArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
