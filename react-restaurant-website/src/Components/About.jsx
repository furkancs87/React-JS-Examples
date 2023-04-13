import React from 'react';
import aboutimage from '../images/about.png';

function About()
{
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=' '/> 
            </div>
        </div>
    );
}

export default About;