import React from "react";
import data from "../App/data";
import Card from "../Card/Card";
import './Second.css';

export default function Second({image, title, text}) {
    return (
        <div className="second">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="second-cards">
                {data.map(card =>(
                    <Card
                    image={card.image}
                    title={card.title}
                    text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}

