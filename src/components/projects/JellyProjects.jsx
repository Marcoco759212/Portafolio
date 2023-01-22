import React from 'react';

const JellyProjects = () => {

    return (
        <div className='jelly-content'>
            <div>
                <div className='jelly-title'>
                    <h1>Pagina web JellyInvest</h1>
                </div>
                <div className='jelly-body'>
                    <div className='jelly-body-image'>

                    </div>
                    <div className='jelly-body-details'>
                        <div className='jelly-body-details-content'>
                            <div>
                                <h2>Frontend</h2>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>Antd y SASS</li>
                                    <li>Axios</li>
                                    <li>Hosting Firebase</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Backend</h2>
                                <ul>
                                    <li>Java SpringBoot</li>
                                    <li>Uso de la API de Magic Eden</li>
                                    <li>Microservicio en Docker container</li>
                                    <li>Nginx Proxy pass</li>
                                </ul>
                            </div>
                        </div>
                        <div className='jelly-body-details-description'>
                            <h2>Descripción</h2>
                            <p>JellyInvest es una web echa para una comunidad basada en NFTs de la cual formo parte de los representantes de la misma,                                 
                                actualmente el proyecto está pendiente debido a la baja mundial de los mercados, la pagina cuenta con los siguientes módulos<br/><br/>
                                <span>Landing page</span>
                                <span>Sección de colecciones de NFTs</span>
                                <span>Barra de búsqueda de colecciones de NFTs</span>
                                <span>Visor de colecciones de NFTs</span>
                            </p>
                        </div>
                    </div>
                

                </div>
                <div className='jelly-footer'>
                    <div>
                        <h2>Ir a la web</h2>
                        <p>Debes saber que la pagina consulta una cantidad de datos bastante grande, 
                        sí no cuentas con un equipo de buenos recursos, evita entrar al apartado 
                        "Tools" ya que tu pc podría bajar su rendimiento considerablemente</p>
                        <br></br>
                        <p>Cabe mencionar que la pagina sigue en desarrollo por lo que aún tiene detalles</p>
                        <div>
                            <a href='https://jellyinvest.mahrsrv.xyz'
                                target='_blank' 
                                rel='noreferrer'>
                                Ir a la página JellyInvest
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default JellyProjects;
