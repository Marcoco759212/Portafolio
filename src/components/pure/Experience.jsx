import React, {useState} from 'react';
import {ReactComponent as ArrowDownIcon}  from './../../images/icons/arrow-down.svg'
import {ReactComponent as ArrowUpIcon}  from './../../images/icons/arrow-up.svg'

const Experience = () => {

    const [styleHide, setStyleHide] = useState(false);

    const hideElements = {
        display: 'none'
    }

    const actionHideElements = () => {
        setStyleHide(!styleHide)
    }

    return (
        <section id='experience' className='exp-content'>
            <div className='exp-professional'>
                <div className='exp-professional-title'>
                    <span>Experiencia profesional</span>
                    <span className='icon-arrow-down'
                        onClick={actionHideElements}>
                        { !styleHide ? <ArrowUpIcon/> : <ArrowDownIcon/> }
                    </span>
                </div> 
                <div className='exp-professional-items' style={ styleHide ? hideElements : null}>
                    <div className='exp-professional-row' >
                        <h1 className='exp-professional-nameproject'>
                            Proyecto de Implementación de la solución API Management - INFONAVIT
                        </h1>
                        <h2 className='exp-professional-company'>
                            Versaria
                        </h2>
                        <div className='exp-professional-desc'>
                            <p>
                                Formé parte del equipo de implementación de la solución de API Management 
                                con sus componentes, API Gateway, API Manager, API Portal, API Gateway Analytics y Embedded Analytics
                            </p>
                            <span>
                                Feb. 2022 - Nov. 2022
                            </span>
                        </div>
                    </div>

                    <div className='exp-professional-row'>
                        <h1>
                            Proyecto de desarrollo de API Firma Electrónica SPEI - HSBC
                        </h1>
                        <h2>
                            Versaria
                        </h2>
                        <div className='exp-professional-desc'>
                            <p>
                                Formé parte del equipo de desarrollo de Java dónde se creó una API que validaba la firma electrónica 
                                que se generaba en sistemas Mainframe, abarqué temas de criptografía, HSMs, Shell Scripting, entre otros.
                            </p>
                            <span>
                                Oct. 2019 - Feb. 2020
                            </span>
                        </div>
                    </div>

                    <div className='exp-professional-row'>
                        <h1>
                            Proyecto de Implementacion de H2H_Payments - MUFG
                        </h1>
                        <h2>
                            Versaria
                        </h2>
                        <div className='exp-professional-desc'>
                            <p>
                                Junto a otro compañero, realizamos la implementación de un canal de distintos pagos (SPEI, SPID, TEF, SWIFT, FT)
                                en el cual se utilizó la solución de B2Bi y Secure Transport, ambas de AXWAY, llevando a mi cargo el desarrollo de la 
                                lógica de negocio que implicaban los archivos de pagos, utilizando las tecnologías de B2Bi, Java y Stored Procedures en SQL Server.
                            </p>
                            <span>
                                Feb. 2022 - Nov. 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
