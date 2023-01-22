import React from 'react';
import {useNavigate} from 'react-router-dom'
import PortadaAtoron from '../../images/projects/AtorónPortada.PNG'
import PortadaJellyWeb from '../../images/projects/JellyWebPortada.PNG'
import PortadaJellyBot from '../../images/projects/JellyBotPortada.PNG'

const Portfolio = () => {

    const navigate = useNavigate();

    return (
        <section id='portfolio' className='portfolio-content'>
            <div className='portfolio-projects'>
                <span>Portafolio de proyectos</span>
                <div className='portfolio-projects-items'>
                    <div className='portfolio-item-medium'>
                        <div className='portfolio-item-img'>
                            <img alt='portada-web-elatoron'
                                src={PortadaAtoron}
                            />
                        </div>
                        <div className='portfolio-item-text'>
                            <span>El Atorón</span>
                            <button onClick={() => navigate(`/atoron-project`)}>Ver más</button>
                        </div>   
                    </div>
                    <div className='portfolio-item-medium'>
                        <div className='portfolio-item-img'>
                            <img alt='portada-web-jellyinvest'
                                src={PortadaJellyWeb}/>
                        </div>
                        <div className='portfolio-item-text'>
                            <span>JellyInvest</span>
                            <button onClick={() => navigate(`/jelly-project`)}>Ver más</button>
                        </div>   
                    </div>
                    <div className='portfolio-item-medium'>
                        <div className='portfolio-item-img'>
                            <img alt='portada-discord-jellybot'
                            src={PortadaJellyBot}/>
                        </div>
                        <div className='portfolio-item-text'>
                            <span>Discord Bot</span>
                            <button onClick={() => navigate(`/bot-project`)}>Ver más</button>
                        </div>   
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default Portfolio;
