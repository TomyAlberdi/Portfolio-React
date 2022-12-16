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
                        <i className="fa-brands fa-js"></i>
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
                        <h2>Conexión con Backend:</h2>
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
                        <i className="fa-solid fa-database"></i>
                        <i className="fa-solid fa-tower-broadcast"></i>
                    </div> 
                </section>
            </div>
            <div className="Main skill backend" data-aos="fade-up">
                <h2 className='titulo'>Backend</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <p>explicación 1</p>
                    </div>
                    <div className="div2 ico">
                        <p>íconos 1</p>
                    </div>
                    <div className="div3 ico">
                        <p>íconos 2</p>
                    </div>
                    <div className="div4 exp">
                        <p>explicación 2</p>
                    </div>
                    <div className="div5 exp">
                        <p>explicación 3</p>
                    </div>
                    <div className="div6 ico">
                        <p>íconos 3</p>
                    </div> 
                </section>
            </div>
            <div className="Main skill infra" data-aos="fade-up">
                <h2 className='titulo'>Infraestructura</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <p>explicación 1</p>
                    </div>
                    <div className="div2 ico">
                        <p>íconos 1</p>
                    </div>
                    <div className="div3 ico">
                        <p>íconos 2</p>
                    </div>
                    <div className="div4 exp">
                        <p>explicación 2</p>
                    </div>
                    <div className="div5 exp">
                        <p>explicación 3</p>
                    </div>
                    <div className="div6 ico">
                        <p>íconos 3</p>
                    </div> 
                </section>
            </div>
            <div className="Main skill soft" data-aos="fade-up">
                <h2 className='titulo'>Soft Skills</h2>
                <section className="enum">
                    <div className="div1 exp">
                        <p>explicación 1</p>
                    </div>
                    <div className="div2 ico">
                        <p>íconos 1</p>
                    </div>
                    <div className="div3 ico">
                        <p>íconos 2</p>
                    </div>
                    <div className="div4 exp">
                        <p>explicación 2</p>
                    </div>
                    <div className="div5 exp">
                        <p>explicación 3</p>
                    </div>
                    <div className="div6 ico">
                        <p>íconos 3</p>
                    </div> 
                </section>
            </div>
        </>
    )
}

export default Skills