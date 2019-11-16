import React from "react";
import ArticleCard from './ArticleCard'

export default function PinnedArticles({articles}) {
 
  return (
    <div className="pinned-articles">
      <div className="title">Pinned</div>
      <div className="articles"><br />
          {articles.map(article=>{
            return <ArticleCard key={article.id} article={article}/>
          })}

      </div>
    </div>
  );
}
