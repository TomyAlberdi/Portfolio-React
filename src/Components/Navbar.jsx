import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/proyectos'}>Proyectos</Link>
                <Link to={'/habilidades'}>Habilidades</Link>
                <Link to={'/contacto'}>Contacto</Link>
            </div>
            <Link to={'/'}><img src="src\assets\favicon.ico"/></Link>
        </div>
    )
}

export default Navbar