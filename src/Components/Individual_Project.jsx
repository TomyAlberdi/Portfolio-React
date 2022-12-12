import { React, useContext, useEffect } from "react";
import { ContextProyecto } from "./utils/projects_context";

const Individual_Project = ({id,img,title,icons}) => {

    const { States, handleEstado } = useContext(ContextProyecto)

    return (
        <article className={"proyecto "+States[id]} onClick={() => handleEstado(id)}>
            <div className="label">
                <img src={img} alt="test" />
                <div className="bar">
                    <div className="number">
                        <h2>{id}</h2>
                    </div>
                    <div className="info">
                        <h2>{title}</h2>
                        <div className="icons">
                            {
                                icons.map((index, item) => {
                                    return <i key={index} className={"fa-brands fa-"+icons[item]}></i>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Individual_Project