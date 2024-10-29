import React from "react";

export default function NewsDetail({ detail, onBack }) {
  return (
    <div className="news-detail">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h1>{detail.title}</h1>
      <p>{detail.date}</p>

      {detail.categories.map((item, index) => (
        <button
          className="category-button"
          key={index}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {item}
        </button>
      ))}

      <div>
        {detail.content.map((item, index) => {
          return item.startsWith("http") ? (
            <img key={index} src={item} alt=""></img>
          ) : (
            <p key={index}>{item}</p>
          );
        })}
      </div>
    </div>
  );
}
