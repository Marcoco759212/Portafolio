import React, {useState, useEffect} from 'react';
import {editUser, getUsers} from './../../services/atoron/UsersServices'
import { editEstatusCodigo, getCodigos } from '../../services/atoron/CodigosServices';

const AtoronProjects = () => {

    const defaultUser = [
        {
            username: 'No data',
            rol: 'No data',
            estatus: 'inactivo'
        }
    ]

    const defaultCode = () => [
        {
            id_desc: '0',
            codigo: 'No data',
            nombre: 'No data',
            descripcion: 'No data',
            descuento: 0,
            estatus: 'activo'
        }
    ]

    const [users, setUsers] = useState(defaultUser);
    const [codes, setCodes] = useState(defaultCode);

    useEffect(() => {
        return () => {
            getUsers()
                .then((res) => {
                    filterUsers(res.data)
                }).catch((error) => {
                    throw new Error(`something went wrong: ${error}` )
                });
            
            getCodigos()
                .then((res) => {
                    setCodes(res.data)
                }).catch((error) => {
                    throw new Error(`something went wrong: ${error}` )
                })
        };
    }, []);

    const obtainAllUsers = () =>{
        getUsers()
            .then((res) => {
                filterUsers(res.data)
            }).catch((error) => {
                throw new Error(`something went wrong: ${error}` )
            })
    }

    const filterUsers = (listUsers) =>{
        setUsers(listUsers.filter(item => item.rol !== 'admin'));
        console.log(listUsers.filter(item => item.rol !== 'admin'));
    }

    const activateUser = (user) =>{
        const newUser = {
            id_user: user.id_user,
            username: user.username,
            password: user.password,
            rol: user.rol,
            estatus: 'inactivo'

        }
        editUser(newUser)
            .then((res) => {
                if(res.data){
                    setTimeout(() => {
                        obtainAllUsers();
                    }, 3000);
                }else{
                    alert('Error al activar usuario, intente más tarde')
                }
            }).catch((error) => {
                throw new Error(`something went wrong: ${error}` )
            })
    }

    const obtainCodigos = () => {
        getCodigos()
            .then((res) => {
                setCodes(res.data)
            }).catch((error) => {
                throw new Error(`something went wrong: ${error}` )
            })
    }

    const activateCode = (code) =>{
        editEstatusCodigo(code.codigo, 'activo')
            .then((res) => {
                if(res.data){
                    setTimeout(() => {
                        obtainCodigos();
                    }, 3000);
                }else{
                    alert('Error al activar código, intente más tarde')
                }
            }).catch((error) => {
                throw new Error(`something went wrong: ${error}` )
            })
    }

    return (
        <div className='atoron-content'>
            <div>
                <div className='atoron-title'>
                    <h1>Pagina web El Atorón</h1>
                </div>
                <div className='atoron-body'>
                    <div className='atoron-body-image'>
                        {/* <img alt='portada de web El Atorón'
                            src={PortadaAtoron}>
                        </img> */}
                    </div>
                    <div className='atoron-body-details'>
                        <div className='atoron-body-details-content'>
                            <div>
                                <h2>Frontend</h2>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>Antd y CSS</li>
                                    <li>Axios</li>
                                    <li>Hosting Firebase</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Backend</h2>
                                <ul>
                                    <li>Java SpringBoot</li>
                                    <li>Microservicio en Docker container</li>
                                    <li>Nginx Proxy pass</li>
                                    <li>Mi propio framework de persistencia de datos</li>
                                </ul>
                            </div>
                        </div>
                        <div className='atoron-body-details-description'>
                            <h2>Descripción</h2>
                            <p>El Atorón fue mi primer sitio web echo a medida para un negocio de bebidas que cuenta con los módulos: <br/><br/>
                            <span>Login</span>
                            <span>Registro</span>
                            <span>Alta de pedidos</span>
                            <span>Menú de productos</span>
                            <span>Administración de la web mediante roles</span>
                            <span>El cliente puede ordenar y ver su orden con un código QR desde su móvil</span>
                            <span>Tiene un sistema de códigos de descuentos</span></p>
                        </div>
                    </div>
                
                    <div className='atoron-body-test'>
                        <h2>Prueba la web</h2>
                        <div>
                            <span>
                                Actualizar tablas
                            </span>
                            <button onClick={ () => {
                                obtainAllUsers();
                                obtainCodigos();
                            } }>
                                actualizar
                            </button>
                        </div>
                        <div className='atoron-body-test-tables'>
                            <div>
                                <h3>Usuarios</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>User Name</th>
                                            <th>Password</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((item, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{item.username}</td>
                                                        <td>{item.password}</td>
                                                        <td style={item.estatus === 'activo' ? {backgroundColor: '#0b8043'} : null}>
                                                            {item.estatus === 'activo' ? 
                                                                <button onClick={() => activateUser(users[index])}>
                                                                    reactivar
                                                                </button>
                                                            :
                                                                item.estatus
                                                            }
                                                        </td>   
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3>Códigos de descuentos</h3>
                                <table>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Password</th>
                                        <th>Status</th>
                                    </tr>
                                    {
                                        codes.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{item.codigo}</td>
                                                    <td>{item.nombre}</td>
                                                    <td style={item.estatus === 'utilizado' ? {backgroundColor: '#0b8043'} : null}>
                                                        {item.estatus === 'utilizado' ? 
                                                            <button onClick={() => activateCode(codes[index])}>
                                                                reactivar
                                                            </button>
                                                        :
                                                            item.estatus
                                                        }
                                                    </td>   
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                        <div>
                            <a href='https://atoron.mahrsrv.xyz/welcome'  
                                target='_blank' 
                                rel='noreferrer'>
                                Ir a la pagina El Atorón
                            </a>
                        </div>
                    </div>
                </div>
                <div className='atoron-footer'>
                    <div>
                        <h2>Indicaciones de uso</h2>
                        <p>El sistema web El Atorón está basado en 4 roles con las siguientes características cada uno:</p>
                        <div>
                            <h4>
                                <span>ADMIN:</span> Tiene el control absoluto del sistema y puede realizar todas las acciones de los demás roles
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <span>MESERO:</span> Puede agregar ordenes, editar ordenes, cancelar productos, agregar descuentos
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <span>CHEF:</span> Solo tiene la capacidad de dar de alta los productos preparados
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <span>CAJERO:</span> Es el encargado de cobrar las ordenes o cancelarlas
                            </h4>
                        </div>
                        <p>Cada vez que un usuario inicia sesión, se registra en el sistema, por lo que no se podrá sesionar una segunda 
                            ves a excepción de que el usuario haga un cierre de sesión, por esta razón se creó el apartado Prueba la web, 
                            sí por alguna razón no puedes hacer el inicio de sesión, solo da click en el botón actualizar y se mostrará un 
                            botón en la columna Status que te permite volver a habilitar el usuario</p>
                        <p>En caso de que no puedas usar un código de descuento, de igual manera tendrás que actualizar las tablas y 
                            reactivar el código para poder utilizarlo</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AtoronProjects;
