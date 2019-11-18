import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addArticle } from "../action/articles";
import Navbar from "./DashboardNav";
// import articleImage from "../images/articleImage.jpeg";
import api from "../utils/api";

function Articles(props) {
  useEffect(() => {
    props.addArticle();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="article-container">
        <div className="article-image">{/* <img src={articleImage} /> */}</div>
        <div className="article-information">
          <h3>Permanent Record</h3>
          <p>Permanent Recordby Edward Snowden</p>
          <button>Book</button>
          <p>Permanent Record is a Bio </p>
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
    isTitleLoading: state.title.isLoading
  };
}

const mapDispatchToProps = {
  addArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
