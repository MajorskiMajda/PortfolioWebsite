import React from 'react';

export default function Hero() {
    return (
        <div className='hero-div' id="home" >
            <div className='hero-ct'>
                <h1 >Hello World, <span>I am Majda</span>.</h1>
                <h1 className='q'>I'm a <span>Web Developer</span>.</h1>
            <p className='paragraphs'>Browse through my portfolio to explore a collection of my latest projects.</p>
            </div>
            <img alt='my img' src='https://i.ibb.co/bsPjpNQ/MyImg.jpg'></img>
        </div>
    )
}