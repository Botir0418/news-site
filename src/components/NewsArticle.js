import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.id}</p>
      <span className="news__author">{data.body}</span> <br />
      <span className="news__published">{data.user_id}</span>
    </div>
  );
}

export default NewsArticle;
