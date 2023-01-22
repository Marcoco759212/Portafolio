import React, {useState} from 'react';
import {ReactComponent as ArrowDownIcon}  from './../../images/icons/arrow-down.svg'
import {ReactComponent as ArrowUpIcon}  from './../../images/icons/arrow-up.svg'

const Education = () => {

    const [styleHide, setStyleHide] = useState(false);

    const hideElements = {
        display: 'none'
    }

    const actionHideElements = () => {
        setStyleHide(!styleHide)
    }

    return (
        <section id='education' className='education-content'>
            <div className='education-timeline'>
                <div className='education-timeline-title'>
                    <span>Educación y cursos complementarios.</span>
                    <span className='icon-arrow-down'
                        onClick={actionHideElements}>
                        { !styleHide ? <ArrowUpIcon/> : <ArrowDownIcon/> }
                    </span>
                </div>  
                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            Curso de Frontend con ReactJS
                        </h1>
                        <h2 className='education-items-company'>
                            Actosoft Academy
                        </h2>
                        <span>
                            Nov. 2022 - Ene. 2023
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            ReactJS, GIT
                        </h1>
                        <h2 className='education-items-company'>
                            OpenBootcamp
                        </h2>
                        <span>
                            Ago. - Dic. 2022
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            Fundamentos de Desarrollo Web
                            PROGRAMA DESDE CERO (HTML, CSS, JS, GIT)
                        </h1>
                        <h2 className='education-items-company'>
                            Actosoft Academy
                        </h2>
                        <span>
                            May. - Jul. 2022
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            Certificación en Axway API Management Developer Track
                        </h1>
                        <h2 className='education-items-company'>
                            Versaria
                        </h2>
                        <span>
                            Mar. 2020
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            CISCO Seguridad cibernética
                        </h1>
                        <h2 className='education-items-company'>
                            ITSOEH
                        </h2>
                        <span>
                            Ene. - Sep. 2017
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            CISCO Introduction to IoT
                        </h1>
                        <h2 className='education-items-company'>
                            ITSOEH
                        </h2>
                        <span>
                            Ene. - Sep. 2017
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            CCNA 2 Routing and Switching CISCO
                        </h1>
                        <h2 className='education-items-company'>
                            ITSOEH
                        </h2>
                        <span>
                            Ene. - May. 2017 (70 hrs)
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            CCNA Routing and Switching CISCO
                        </h1>
                        <h2 className='education-items-company'>
                            ITSOEH
                        </h2>
                        <span>
                            Ago. - Dic. 2016 (70 hrs)
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            Curso en desarrollo de aplicaciones móviles en Android Studio
                        </h1>
                        <h2 className='education-items-company'>
                            ITSOEH
                        </h2>
                        <span>
                            Jun. - Ago. 2016 (80 hrs)
                        </span>
                    </div>
                </div>

                <div className='education-items' style={ styleHide ? hideElements : null}>
                    <div className='education-items-row'>
                        <h1 className='education-items-nameproject'>
                            Ingeniería en Tecnologías de la Información y Comunicaciones
                        </h1>
                        <h2 className='education-items-company'>
                            Instituto Tecnológico Superior del Occidente del Estado de Hidalgo (ITSOEH)
                        </h2>
                        <span>
                            Ago. 2014 - Mar. 2019
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
