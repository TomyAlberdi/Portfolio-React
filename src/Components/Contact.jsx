import React from 'react'
import Contact_form from './utils/Contact_form'
import contact_form from './utils/Contact_form'

const Contact = () => {

    const copyMail = () => {
        navigator.clipboard.writeText("tomas.alberdi.2001@gmail.com")
        let div = document.querySelector('.mail_link')
        div.classList.add("copied")
        let icon = document.querySelector('.fa-copy')
        icon.classList.remove('fa-copy')
        icon.classList.remove('fa-regular')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-check')
    }

    return (
        <div className='Main Contact'>
            <h1 className='titulo'>Contacto</h1>
            <section className="links">
                <a href="https://github.com/TomyAlberdi" target="_blank">
                    <i className="fa-brands fa-github"></i>
                    <h3>GitHub</h3>
                </a>
                <a href="https://www.linkedin.com/in/tom%C3%A1s-alberdi-42150a219/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    <h3>LinkedIn</h3>
                </a>
                <a href="https://wa.me/+542214181379" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                    <h3>WhatsApp</h3>
                </a>
            </section>
            <section className="mail">
                <h2 className='titulo'>Escribime a través de:</h2>
                <div className="mail_link" onClick={copyMail}>
                    <h2>tomas.alberdi.2001@gmail.com</h2>
                    <i className="fa-regular fa-copy"></i>
                </div>
            </section>
        </div>
    )
}

export default Contact