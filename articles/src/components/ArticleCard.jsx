import React from 'react'
import { Link } from "react-router-dom";


export default function ArticleCard(props){

    return (
        
        <Link to={`/articles/${props.article.id}`} className="card">
              <div className="card-image">
                <img src={props.article.image} title={props.article.title} alt={props.article.title}/>
              </div>
              <div className="card-content">
                  <div className="title">{props.article.title}</div>
                  <div className="category">{props.article.category}</div>
              </div>
          </Link>
    )
}