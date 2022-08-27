import React from 'react';
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT3 = () => { 
    return (
        <div className='gpt3__whatgpt3 section-margin' id='wgpt3'>
            <div className="gpt3__whatgpt3--feature">
                <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sint recusandae. Beatae ex error neque quod, molestias harum cumque illo quis aspernatur omnis illum amet excepturi ad, vel ratione et accusantium. Incidunt, dolor quisquam perferendis quis illo similique nobis aliquam temporibus vel. Veritatis temporibus deserunt eaque? Nihil debitis sit quia est labore! Molestias aliquid quos minima doloremque animi quas ad blanditiis repudiandae sequi? Officia dolorum saepe, odio error voluptatibus exercitationem.'/>
            </div>

            <div className="gpt3__whatgpt3--heading">
                <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>

            <div className="gtp3__whatgpt3--container">
                <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic nihil quibusdam quo fuga quam inventore iste nisi nulla consequatur.'/> 
                <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora nemo rerum, ipsam aspernatur perspiciatis atque, voluptatem soluta, dolorem aut nihil delectus fugit autem earum!'/> 
                <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora nemo rerum, ipsam aspernatur perspiciatis atque, voluptatem soluta, dolorem aut nihil delectus fugit autem earum!'/>
            </div>
        </div>
    )
}

export default WhatGPT3
