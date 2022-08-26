import React from "react";
import './Article.css';

export default function Article(props) {
    
    return (
        <div className="article">
            <div className="article-author">{props.author}</div>
            <h3 className="article-title">{props.title}</h3>
            <div className="article-text">{props.text}</div>
        </div>
    )
}