import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../action/articles";
import Navbar from "./DashboardNav";
import api from "../utils/api";

const data = [
  {
    id: 1,
    title: "Permanent Record",
    summary:
      "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company's Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
    link: "https://www.britannica.com/topic/Pokemon-electronic-game",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51z1ZaEn6sL._SX327_BO1,204,203,200_.jpg",
    user_id: 1,
    category: "Article"
  },
  {
    id: 2,
    title: "The Design Hustle",
    summary:
      "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
    link: "https://en.wikipedia.org/wiki/Dota_2",
    image:
      "https://cdn.cp.adobe.io/content/2/rendition/2fbc681c-bb10-4ddd-9d27-ae0764a88610/version/0/format/jpg/dimension/width/size/200",
    user_id: 2,
    category: "Article"
  }
];

function Articles(props) {
  useEffect(() => {
    props.addArticle();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="article-container">
        <div className="article-image">
          <img src={data[0].image} alt="" />
        </div>
        <div className="article-information">
          <h3>{data[0].title}</h3>
          <p>By Edward Snowden</p>
          <button className="book-button">Book</button>
          <p className="summary">{data[0].summary} </p>

          <div className="article-buttons">
            <button className="article-button">Read</button>
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
    isTitleLoading: state.title.isLoading
  };
}

const mapDispatchToProps = {
  // addArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
