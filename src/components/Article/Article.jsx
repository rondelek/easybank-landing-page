import React from "react";
import './Article.css';

export default function Article(props) {
    
    return (
        <div className="article">
            <div className="article-top">
                <div className="article-image">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className="article-bottom">
                <div className="article-author">{props.author}</div>
                <h3 className="article-title">{props.title}</h3>
                <div className="article-text">{props.text}</div>
            </div>
        </div>
    )
}