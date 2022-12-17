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
                                <li>SASS / SCSS</li>
                                <li>Flexbox</li>
                                <li>Grid</li>
                            </ul>
                            <ul>
                                <li>Media Queries y Accesibilidad</li>
                                <li>Formularios</li>
                                <li>Manipulación del DOM</li>
                            </ul>
                            <ul>
                                <li>Web Interactiva / Eventos</li>
                                <li>JSON, SessionStorage y LocalStorage</li>
                                <li>APIs, Promesas y Try/Catch</li>
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
                                <li>Componentes Funcionales</li>
                                <li>Props</li>
                                <li>Hooks: useState, useEffect, useCallback y useMemo</li>
                            </ul>
                            <ul>
                                <li>React Router</li>
                                <li>React Testing: Componentes y Hooks</li>
                                <li>Context Global, useReducer</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>JavaScript Vanilla:</h2>
                        <article className="lists">
                            <ul>
                                <li>Variables, tipos de datos y operadores</li>
                                <li>Funciones y Arrow Functions</li>
                                <li>If ternario, Switch y ciclos</li>
                            </ul>
                            <ul>
                                <li>Arrays, Matrices y Objetos</li>
                                <li>Algoritmos de ordenación (Bubble Sort)</li>
                                <li>Algoritmos de búsqueda (Búsqueda Binaria)</li>
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
                                <li>Relaciones entre clases (Agregación, Composición)</li>
                                <li>Herencia, Clases Abstractas, Polimorfismo</li>
                                <li>Interfaces, Comparable</li>
                            </ul>
                            <ul>
                                <li>Colecciones: List, Set y Map</li>
                                <li>Excepciones</li>
                                <li>Patrones de desarrollo</li>
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
                                <li>Entidades, Atributos y Relaciones</li>
                                <li>SQL Queries: CRUD</li>
                                <li>Joins y Vistas</li>
                            </ul>
                            <ul>
                                <li>Índices</li>
                                <li>Stored Procedures</li>
                                <li>ORMs</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>Creación de APIs REST con Java:</h2>
                        <article className="lists">
                            <ul>
                                <li>Maven y H2 DataBase</li>
                                <li>Spring Boot</li>
                                <li>MVC: Modelo, Vista y Controlador</li>
                            </ul>
                            <ul>
                                <li>ORM: Hibernate y Spring Data</li>
                                <li>Spring Security: Login y roles de usuarios</li>
                                <li>Unit Testing de Servicios</li>
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
                                <li>Conocimientos de hardware y arquitectura</li>
                                <li>Redes y protocolos de Internet, Modelo OSI</li>
                                <li>Seguridad activa y pasiva</li>
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
                        <h2>Virtualización y Cloud Computing:</h2>
                        <article className="lists">
                            <ul>
                                <li>Docker: Container y Docker Compose</li>
                                <li>Serverless</li>
                                <li>AWS</li>
                            </ul>
                            <ul>
                                <li>Administración de Máquinas Virtuales</li>
                                <li>Configuration Management</li>
                                <li>Linux / VirtualBox</li>
                            </ul>
                        </article>
                    </div>
                    <div className="div5 exp">
                        <h2>Scripting:</h2>
                        <article className="lists">
                            <ul>
                                <li>Bash</li>
                                <li>PowerShell</li>
                                <li>Python</li>
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
                                <li>Ciclos de desarrollo de software</li>
                                <li>Métodos ágiles</li>
                                <li>Lean y Kanban</li>
                            </ul>
                            <ul>
                                <li>Scrum: Artefactos y Eventos</li>
                                <li>Visión de producto: MVP</li>
                                <li>Design Thinking</li>
                            </ul>
                            <ul>
                                <li>Product RoadMap</li>
                                <li>Métricas de agilidad</li>
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
                                <li>Diseño de Experiencia (UX)</li>
                                <li>Diseño de Interfaz (UI)</li>
                                <li>Convergencia y Divergencia</li>
                            </ul>
                            <ul>
                                <li>Content Prototype y UX Writing</li>
                                <li>User Flow</li>
                                <li>Prototipado y Patrones de diseño</li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Skills