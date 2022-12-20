import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/proyectos'}>Proyectos</Link>
                    <Link to={'/habilidades'}>Habilidades</Link>
                    <Link to={'/contacto'}>Contacto</Link>
                </div>
                <Link to={'/'}><img src="src\assets\favicon.ico"/></Link>
            </div>
            <span className="open_navbar fa-stack fa-lg">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-bars fa-stack-1x"></i>
            </span>
        </>
    )
}

export default Navbar