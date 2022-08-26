import React from "react";
import './Last.css';
import data2 from "../App/data2";
import Article from "../Article/Article";

export default function Last() {
    return (
        <div className="last">
            <h2>Latest Articles</h2>
            <div className="last-articles">
                {data2.map(card =>(
                    <Article
                    image={card.image}
                    author={card.author}
                    title={card.title}
                    text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}