import React, { useContext } from 'react'
import { ContextSkill } from './skills_context'

const Individual_Skill = ({title,text,type,id}) => {

    const { States } = useContext(ContextSkill)

    return (
        <div className={"selected_skill "+type+" "+States[id]}>
            <div className="header">
                <h2>{title}</h2>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Individual_Skill