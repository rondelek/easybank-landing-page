import React from 'react';
import Button from '../Button/Button';
import logo from '../../assets/logo.svg';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <img src={logo}></img>
            <div className="header-elements">
                <div className="header-element">Home</div>
                <div className="header-element">About</div>
                <div className="header-element">Contact</div>
                <div className="header-element">Blog</div>
                <div className="header-element">Careers</div>
            </div>
            <Button/>
        </div>
    )
}

