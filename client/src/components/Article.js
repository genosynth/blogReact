import React from 'react';

function Article({article}) {

  let style={textAlign: "right"}

  return <div className='box'>
      <h2>{article.name}</h2>
      <p>{article.content}</p>
      <span>{article.date}</span>
      <span style={style}>Posted by <b>{article.username}</b></span>
  </div>
}

export default Article;
