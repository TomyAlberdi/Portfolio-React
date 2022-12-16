import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    AOS.init()
    return (
        <>
            <div className="Main skill frontend">
                <h2 className='titulo'>Frontend</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <h2>Desarrollo Web Básico:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                            <ul>
                                <li>Skill7</li>
                                <li>Skill8</li>
                                <li>Skill9</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div2 ico">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-sass"></i>
                    </div>
                    <div className="div3 ico">
                        <i className="fa-brands fa-react"></i>
                    </div>
                    <div className="div4 exp">
                        <h2>Librerías y Frameworks:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>JavaScript Vanilla:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div6 ico">
                        <i className="fa-brands fa-js"></i>
                    </div> 
                </section>
            </div>
            <div className="Main skill backend" data-aos="fade-up">
                <h2 className='titulo'>Backend</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <h2>Programación Orientada a Objetos:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                            <ul>
                                <li>Skill7</li>
                                <li>Skill8</li>
                                <li>Skill9</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div2 ico">
                        <i className="fa-brands fa-java"></i>
                    </div>
                    <div className="div3 ico">
                        <i className="fa-solid fa-database"></i>
                    </div>
                    <div className="div4 exp">
                        <h2>Bases de datos:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>Creación de APIs REST:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div6 ico">
                        <i className="fa-solid fa-layer-group"></i>
                        <i className="fa-solid fa-flask"></i>
                        <i className="fa-solid fa-lock"></i>
                    </div> 
                </section>
            </div>
            <div className="Main skill infra" data-aos="fade-up">
                <h2 className='titulo'>Infraestructura</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <h2>Arquitectura Cliente-Servidor:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                            <ul>
                                <li>Skill7</li>
                                <li>Skill8</li>
                                <li>Skill9</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div2 ico">
                        <i className="fa-solid fa-server"></i>
                        <i className="fa-solid fa-computer"></i>
                    </div>
                    <div className="div3 ico">
                        <i className="fa-brands fa-aws"></i>
                        <i className="fa-brands fa-docker"></i>
                    </div>
                    <div className="div4 exp">
                        <h2>Virtualización:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>Scripting:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div6 ico">
                        <i className="fa-solid fa-terminal"></i>
                        <i className="fa-brands fa-python"></i>
                    </div> 
                </section>
            </div>
            <div className="Main skill soft" data-aos="fade-up">
                <h2 className='titulo'>Soft Skills y Diseño de Interfaz</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <h2>Metodologías de trabajo:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                            <ul>
                                <li>Skill7</li>
                                <li>Skill8</li>
                                <li>Skill9</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div2 ico">  
                        <i className="fa-solid fa-arrows-split-up-and-left"></i>
                        <i className="fa-solid fa-briefcase"></i>
                        <i className="fa-solid fa-users-gear"></i>
                    </div>
                    <div className="div3 ico">
                        <i className="fa-solid fa-compass-drafting"></i>
                        <i className="fa-solid fa-object-group"></i>
                    </div>
                    <div className="div4 exp">
                        <h2>UX/UI:</h2>
                        <article className="lists">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                            <ul>
                                <li>Skill4</li>
                                <li>Skill5</li>
                                <li>Skill6</li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Skills