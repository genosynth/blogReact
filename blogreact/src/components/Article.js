import React from 'react';

function Article({article}) {
  return <div className=''>
      <h2>{article.name}</h2>
      <p>{article.content}</p>
  </div>
}

export default Article;
