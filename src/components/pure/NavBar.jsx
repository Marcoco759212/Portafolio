import React, { useState } from 'react';

const NavBar = () => {

    const [btnStyle, setBtnStyle] = useState(false);

    const changeBtnMenu = () => {
        setBtnStyle(!btnStyle)
    }

    return (
        <>
            <aside className='nav-content'>
                <div className='nav-blur'>

                </div>
                <ul>
                    <li>
                        <a href='/#home'>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#about'>
                            <span>Acerca de mí</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#skills'>
                            <span>Habilidades</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#experience'>
                            <span>Experiencia</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#education'>
                            <span>Educación</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#portfolio'>
                            <span>Portafolio</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#contact'>
                            <span>Contacto</span>
                        </a>
                    </li>
                </ul>
            </aside>
        
            <aside className='nav-small-content'>
                <div className='nav-small'>
                    <div onClick={changeBtnMenu}
                        className='btn-1'
                        style={{display: !btnStyle ? "flex" : "none"}}>
                        <span className='nav-small-btn1'></span>
                    </div>
                    <div onClick={changeBtnMenu}
                        className='btn-2'
                        style={{display: btnStyle ? "flex" : "none"}}>
                        <span className='nav-small-btn2'></span>
                    </div>
                </div>
                <div className='nav-small-blur'></div>
                <div className='nav-list-blur'
                    // style={{ transform: `translateX( ${ !btnStyle ? '100%' : '0%'} )`}}>   
                    style={{ transform: `scale( ${ !btnStyle ? '0, 0' : '1, 1'} )`}}>
                    </div>
                <div className='nav-small-list'
                    // style={{ transform: `translateX( ${ !btnStyle ? '100%' : '0%'} )`}}>
                    style={{ transform: `scale( ${ !btnStyle ? '0, 0' : '1, 1'} )`}}>
                    <ul>
                    <li>
                        <a href='/#home'
                            onClick={changeBtnMenu}>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#about'
                            onClick={changeBtnMenu}>
                            <span>Acerca de mí</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#skills'
                            onClick={changeBtnMenu}>
                            <span>Habilidades</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#experience'
                            onClick={changeBtnMenu}>
                            <span>Experiencia</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#education'
                            onClick={changeBtnMenu}>
                            <span>Educación</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#portfolio'
                            onClick={changeBtnMenu}>
                            <span>Portafolio</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#contact'
                            onClick={changeBtnMenu}>
                            <span>Contacto</span>
                        </a>
                    </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default NavBar;
