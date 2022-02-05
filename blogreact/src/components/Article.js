import React from 'react';

function Article({article}) {
  return <div className='box'>
      <h2>{article.name}</h2>
      <p>{article.content}</p>
      <span>{article.date}</span>
  </div>
}

export default Article;
