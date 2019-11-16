import React from "react";
import ArticleCard from './ArticleCard'
import Search from './Search'

export default function ArticleGroup({articles, name, search}) {
 
  return (
    <div className="article-group">
<div className="title">{name || 'No data'}</div>
    <Search search={search} articles={articles} />
      <div className="articles">
          {articles.map(article=>{
            return <ArticleCard key={article.id} article={article}/>
          })}

      </div>
    </div>
  );
}
