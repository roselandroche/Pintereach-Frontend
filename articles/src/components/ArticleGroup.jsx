import React from "react";
import ArticleCard from './ArticleCard'

export default function ArticleGroup({articles, name}) {
 
  return (
    <div className="article-group">
<div className="title">{name || 'No data'}</div>
      <div className="articles"><br />
          {articles.map(article=>{
            return <ArticleCard key={article.id} article={article}/>
          })}

      </div>
    </div>
  );
}
