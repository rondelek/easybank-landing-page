import React from "react";
import data from '../App/data';
import './Card.css'


export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.text}</p>
        </div>
    )
}
