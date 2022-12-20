import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const openNavbar = () => {
        let nav = document.querySelector('.Navbar')
        nav.classList.toggle('opened')
        let icon = document.querySelector('.fa-stack-1x')
        icon.classList.toggle('fa-bars')
        icon.classList.toggle('fa-xmark')
    }

    return (
        <>
            <div className='Navbar'>
                <div>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/proyectos'}>Proyectos</Link>
                    <Link to={'/habilidades'}>Habilidades</Link>
                    <Link to={'/contacto'}>Contacto</Link>
                </div>
                <Link className='link_icon' to={'/'}><img src="src\assets\favicon.ico"/></Link>
            </div>
            <span className="open_navbar fa-stack fa-lg" onClick={openNavbar}>
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-bars fa-stack-1x"></i>
            </span>
        </>
    )
}

export default Navbar