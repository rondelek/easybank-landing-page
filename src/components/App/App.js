import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
// import data from './data.js';
import Second from '../Second/Second';
import Last from '../Last/Last';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Second/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
