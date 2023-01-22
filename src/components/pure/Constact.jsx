import React from 'react';
import {ReactComponent as Mail} from './../../images/icons/Mail.svg'
import { ReactComponent as Linkedin } from './../../images/icons/linkedin.svg';

const Contact = () => {

    return (
        <section id='contact' className='contact'>
            <div className='contact-content'>
                <h1>Contactame</h1>
                <div className='contact-content-desc'>
                    <p>Cualquier propuesta, pregunta o incluso un saludo; Puedes contactarme 
                    a mi correo o en mi perfil de Linkedin, haré lo posible por contestar lo más 
                    rápido posible.</p>
                </div> 
                <div className='contact-content-items'>
                    <a href='https://www.linkedin.com/in/marco-hernandez-9b3326191/'
                        target={'_blank'}
                        rel='noreferrer'>
                        <span className='contact-icon'>
                            <Linkedin className='contact-icon-link'></Linkedin>
                        </span>
                        <span>Marco Hernández</span>
                    </a>
                    <a href='mailto:marco.ozz@hotmail.com'>
                        <span className='contact-icon'>
                            <Mail className='contact-icon-mail'></Mail>
                        </span>
                        <span>marco.ozz@hotmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
