import React from "react";
import logo from '../../assets/logo-white.svg';
import facebook from '../../assets/icon-facebook.svg';
import youtube from '../../assets/icon-youtube.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';
import './Footer.css';
import Button from "../Button/Button";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="first-column">
                <img src={logo} alt="" className="logo"/>
                <div className="socials">
                    <img src={facebook} alt="" className="cursor"/>
                    <img src={youtube} alt="" className="cursor"/>
                    <img src={twitter} alt="" className="cursor"/>
                    <img src={pinterest} alt="" className="cursor"/>
                    <img src={instagram} alt="" className="cursor"/>
                </div>
            </div>
            <div className="column">
                <div className="cursor">About Us</div>
                <div className="cursor">Contact</div>
                <div className="cursor">Blog</div>
            </div>
            <div className="column">
                <div className="cursor">Careers</div>
                <div className="cursor">Support</div>
                <div className="cursor">Privacy Policy</div>
            </div>
            <div className="footer-end">
                <Button/>
                <p>© Easybank. All Rights Reserved</p> 
            </div>
        </div>
    )
}