import React from 'react'
import Individual_Skill from './Individual_Skill'
import { ContextSkill } from './skills_context';
import { useContext } from 'react';

const Skill_block = ({data}) => {

    const { handleEstado } = useContext(ContextSkill)

    return (
        <div className={"Main skill "+data.type} data-aos="fade-up">
            <h2 className="titulo">{data.type}</h2>
            <div className="menu">
                {
                    data.data.map(skill => {
                        return <div key={skill.id} className="option" id={skill.data.id} onClick={() => handleEstado(skill.id)}>
                            <i className={skill.icon}></i>
                        </div>
                    })
                }
            </div>
            {
                data.data.map(ind => {
                    return <Individual_Skill key={ind.id} id={ind.id} type={ind.type} title={ind.data.title} text={ind.data.text} />
                })
            }
        </div>
    )
}

export default Skill_block