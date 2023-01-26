import React, {useState, useEffect} from 'react';
import Java from '../../images/skills/Java.png'
import JS from '../../images/skills/JS.png'
import HTML from '../../images/skills/HTML.png'
import CSS from '../../images/skills/CSS.png'
import SASS from '../../images/skills/SASS.png'
import Spring from '../../images/skills/Spring.png'
import ReactJS from '../../images/skills/React.png'
import Git from '../../images/skills/Git.png'
import DB from '../../images/skills/server.png'
import Terminal from '../../images/skills/command-line.png'
import Axway from '../../images/skills/Axway.png'
import Axway2 from '../../images/skills/Axway2.png'
import Docker from '../../images/skills/Docker.png'

const Skills = () => {

    const element = document.querySelector('#root');

    const [sizeWidth, setSizeWidth] = useState(true);
    const [hability, setHability] = useState(0);

    useEffect(() => {
        return () => {
            let size = element.clientWidth;
            if(size > 768){
                setSizeWidth(true)
            }
            if(size < 768){
                setSizeWidth(false)
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const profesionalsSkills = [
        `De las cosas que más me gustan, es resolver los problemas productivos, 
         arquitectar proyectos, resolver bugs etc. Me gusta la satisfacción que
         siento cuando resuelvo el fix o cuando se lanza el proyecto.`,
        `Una habilidad que se me da muy bien es el trabajo en equipo, ya que puedo 
         coordinarme bastante bien con las personas que me rodean`,
        `La responsabilidad es algo importante y que ejerzo muy bien laboralmente, 
         ya que me gusta estar haciendo cosas diferentes todo el tiempo y sobre todo
         cada vez que impliquen mayores retos.`,
        `Soy muy comprometido con mi trabajo, cuando es necesario invertir más tiempo,
         lo hago sin ningún problema ya que para mí es importante que las actividades
         se lleven en tiempo y forma`,
        `Mi creatividad esta más enfocada en la resolución de problemas, cuando estoy
         frente a un problema se me ocurren distintas ideas y formas de resolverlo`
    ]

    const setStyle = (select) => {
        if(select === hability){
            return(
                stylesSelected
            )
        }
    }

    const calculatetSize = () => {
        let size = element.clientWidth;
        if(size > 768){
            setSizeWidth(true)
        }
        if(size < 768){
            setSizeWidth(false)
        }
    }

    window.onresize = () => {
        calculatetSize()
    }

    const stylesSelected = {
        backgroundColor : 'var(--color-3)' , 
        color : 'var(--color-2)',
        borderRadius: '.6rem'
    }

    return ( 
        <section id='skills' className='skills-content'>
            <br/>
            <div className='skills-technicals'>
                <span>Habilidades técnicas</span>
                <div className='skills-technicals-items'>
                    <div className='skills-medium'>
                        <div className='skills-tech-img'>
                            <img src={Java}
                                alt='skill-java'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>Java</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={Spring}
                                alt='skill-Spring'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>Spring</span>
                        </div>   
                    </div>
                    <div className='skills-wide'>
                        <div className='skills-tech-img' 
                            style={sizeWidth ? {transform: 'scale(.8)'} : {transform: 'scale(1)'}} >
                            <img src={JS}
                                alt='skill-JavaScript'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>JS</span>
                        </div>   
                    </div>
                    
                    <div className='skills-small'>
                        <div className='skills-tech-img'  style={ sizeWidth ? {transform: 'scale(1)'} : {transform: 'scale(.8)'}}>
                            <img src={DB}
                                alt='skill-SASS'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>DB SQL</span>
                        </div>
                    </div>
                    <div className='skills-wide'>
                        <div className='skills-tech-img'
                            style={ sizeWidth ? {transform: 'scale(.9)'} : {transform: 'scale(1)'}}>
                            <img src={ReactJS}
                                alt='skill-ReactJS'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>ReactJS</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={HTML}
                                alt='skill-JavaScript'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>HTML</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={CSS}
                                alt='skill-CSS'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>CSS</span>
                        </div>   
                    </div>                    
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={SASS}
                                alt='skill-SASS'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>SASS</span>
                        </div>   
                    </div>
                    <div className='skills-wide'>
                        <div className='skills-tech-img' 
                            style={ sizeWidth ? {transform: 'scale(.8)'} : {transform: 'scale(1)'}}>
                            <img src={Git}
                                alt='skill-Git'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>Git</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'
                            style={ sizeWidth ? {transform: 'scale(.9)'} : {transform: 'scale(1)'}}>
                            <img src={sizeWidth ? Axway : Axway2}
                                alt='skill-Axway B2Bi'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>B2Bi</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={Terminal}
                            style={ sizeWidth ? {backgroundColor: 'white', borderRadius: '.6rem'} : null}
                                alt='skill-ShellScript'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>Shell Script</span>
                        </div>   
                    </div>
                    <div className='skills-small'>
                        <div className='skills-tech-img'>
                            <img src={Docker}
                                alt='skill-ShellScript'
                            />
                        </div>
                        <div className='skills-tech-text'>
                            <span>Docker</span>
                        </div>   
                    </div>
                </div> 
            </div>
            <div className='skills-professionals'>
                <span>Habilidades Profesionales</span>
                <div className='skills-pro-items'>
                    <div className='skills-pro-items-topics'>
                        <span style={setStyle(0)} 
                            onClick={() => setHability(0)}>
                            Resolución de problemas
                        </span>
                        <span style={setStyle(1)} 
                            onClick={() => setHability(1)}>
                            Trabajo en equipo
                        </span>
                        <span style={setStyle(2)} 
                            onClick={() => setHability(2)}>
                            Responsabilidad
                        </span>
                        <span style={setStyle(3)} 
                            onClick={() => setHability(3)}>
                            Compromiso
                        </span>
                        <span style={setStyle(4)} 
                            onClick={() => setHability(4)}>
                            Creatividad
                        </span>
                    </div>
                    <div className='skills-pro-items-descs'>
                        <p>{profesionalsSkills[hability]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
