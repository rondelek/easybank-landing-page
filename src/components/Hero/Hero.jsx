import React from "react";
import Button from "../Button/Button";
import mockups from "../../assets/image-mockups.png";
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button/>
            </div>
            <div className="hero-right">
                <img src={mockups} alt="" className="mockups"/>
            </div>
        </div>
    )
}