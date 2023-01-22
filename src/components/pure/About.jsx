import React from 'react';

const About = () => {

    const calcularEdad = (fecha) => {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }

    return (
        <section id='about' className='about-content'>
            <div className='about-description'>
                <div>
                    <span>
                        Acerca de mi:
                    </span>
                    <p>
                        Soy Ingeniero en Tecnologías de la Información y Comunicaciones, 
                        laboralmente, me gusta resolver problemas y crear proyectos que impliquen nuevos retos,
                        personalmente, estoy incursionando en el mundo de WEB3 y creando proyectos sobre ello,
                        me gusta viajar y conocer lugares nuevos, también me gusta 
                        bailar y soy estudiante de los géneros de cumbia, bachata y salsa.
                    </p> 
                </div>
                <div>
                    <span>
                        Información general:
                    </span>
                    <div className='about-genral-info'>
                        <div className='about-genral-info-row'>
                            <span className='about-genral-info-label'>Nombre:</span>
                            <samp className='about-genral-info-content'>
                                Marco Antonio Hernández Reyes
                            </samp>
                        </div>
                        <div className='about-genral-info-row'>
                            <span className='about-genral-info-label'>Edad:</span>
                            <samp className='about-genral-info-content'>
                                {calcularEdad('1996-10-23')}
                            </samp>
                        </div>
                        <div className='about-genral-info-row'>
                            <span className='about-genral-info-label'>Nacionalidad:</span>
                            <samp className='about-genral-info-content'>Mexicana</samp>
                        </div>
                        <div className='about-genral-info-row'>
                            <span className='about-genral-info-label'>Idiomas:</span>
                            <samp className='about-genral-info-content'>Español - Inglés (básico)</samp>
                        </div>
                        <div className='about-genral-info-row'>
                            <span className='about-genral-info-label'>Estado civil</span>
                            <samp className='about-genral-info-content'>Soltero</samp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
