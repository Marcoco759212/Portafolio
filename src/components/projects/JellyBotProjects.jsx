import React from 'react';

const JellyBotProjects = () => {

    return (
        <div className='bot-content'>
            <div>
                <div className='bot-title'>
                    <h1>Discord Bot - JellyBot</h1>
                </div>
                <div className='bot-body'>
                    <div className='bot-body-image'>

                    </div>
                    <div className='bot-body-details'>
                        <div className='bot-body-details-content'>
                            <div>
                                <h2>Backend</h2>
                                <ul>
                                    <li>Node JS</li>
                                    <li>Microservicio en Docker container</li>
                                    <li>Conecta con la API del proyecto JellyInvest</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Descripción</h2>
                                <p>JellyBot es un bot echo en Node JS para el servidor de Discord de la comunidad Jellysgang, cuenta con las siguientes 
                                    funcionalidades:
                                    <br/>
                                    <br/>
                                    <span>Muestra los primeros 10 NFTs de cualquier colección de Magic Eden de acuerdo con los filtros de Rank y Precio</span>
                                    <br/>
                                    <span>Puede detener e iniciar un servicio que cada minuto consulta los movimientos (compra, venta, listados, etc.) de una Wallet de solana</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JellyBotProjects;
