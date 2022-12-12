import { React, useContext } from "react";
import { ContextProyecto } from "./utils/projects_context";

const Individual_Project = ({id,img,title,icons,link}) => {

    const { States, handleEstado } = useContext(ContextProyecto)

    const handleLink = () => {
        if (States[id]==="active") {
            window.open(link,"_blank")
        }
    }

    return (
        <article className={"proyecto "+States[id]} onClick={() => {handleLink();handleEstado(id);}}>
            <div className="label">
                <img src={img} alt="test" />
                <div className="bar">
                    <div className="number">
                        <h2>{id+1}</h2>
                    </div>
                    <div className="info">
                        <h2>{title}</h2>
                        <div className="icons">
                            {icons.map((index,item) => {
                                return <i className={"fa-brands fa-"+icons[item]} key={index}></i>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Individual_Project