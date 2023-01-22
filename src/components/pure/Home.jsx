import React from 'react';
import Earth from '../planets/Earth';
import Jupiter from '../planets/Jupiter';
import Mercury from '../planets/Mercury';
import Sun from '../planets/Sun';
import Venus from '../planets/Venus';
import Mars from '../planets/Mars';
import Saturn from '../planets/Saturn';


const Home = () => {
    return (
        <section id='home' className='home-content' >
            <div className='home-content-planets'>

                <div className='home-planet'><Saturn></Saturn></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>

                <div className='home-planet'></div>
                <div className='home-planet'><Jupiter></Jupiter></div>
                <div className='home-planet'><Earth></Earth></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>

                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'><Venus></Venus></div>

                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>
                <div className='home-planet'></div>

                <div className='home-planet'></div>
                <div className='home-planet'><Mars></Mars></div>
                <div className='home-planet'></div>
                <div className='home-planet'><Mercury></Mercury></div>
                <div className='home-planet'><Sun></Sun></div>
            </div>
            
            
            <div className='home-title'>
                <div>
                    <h1>
                        <span>¡</span>
                        Hola!
                        <span>,</span>
                    </h1>
                    <h2>soy</h2>
                </div>
                <h3>
                    <span>M</span>
                    <span>A</span>
                    <span>R</span>
                    <span>C</span>
                    <span>O</span>
                </h3>
            </div>
        </section>
    );
}

export default Home;
