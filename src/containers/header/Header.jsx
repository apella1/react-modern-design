import React from 'react';
import icon from '../../assets/ai.png';
import people from '../../assets/people.png';

import './header.css'

const Header = () => { 
    return (
        <div className='gpt3__header section-padding' id='home'>
            <div className="gpt3__header--content">
                <h1 className='gradient-text'>Let's Build Something amazing with GPT-3 OpenAI</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto excepturi ullam aut perferendis atque? Molestiae quae saepe ex inventore.</p>

                <div className="gpt3__header--content-input">
                    <input type='email' placeholder='Your Email Address'/>
                    <button type='button' className='get-started__button'>Get Started</button>
                </div>
                <div className="gpt3__header--content-users">
                    <img src={people} alt="users" />
                    <p>1600 people requested access to visit in the last 24 hours.</p>
                </div>
            </div>

            <div className="gpt3__header--icon">
                <img src={icon} alt="icon" />
            </div>
            
        </div>
    )
}

export default Header