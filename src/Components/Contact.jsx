import React from 'react'
import Contact_form from './utils/Contact_form'
import contact_form from './utils/Contact_form'

const Contact = () => {
    return (
        <div className='Main Contact'>
            <h1 className='titulo'>Contacto</h1>
            <section className="links">
                <a href="https://github.com/TomyAlberdi" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    <h3>GitHub</h3>
                </a>
                <a href="https://www.linkedin.com/in/tom%C3%A1s-alberdi-42150a219/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                    <h3>LinkedIn</h3>
                </a>
                <a href="https://wa.me/+542214181379" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                    <h3>WhatsApp</h3>
                </a>
            </section>
            <Contact_form />
        </div>
    )
}

export default Contact