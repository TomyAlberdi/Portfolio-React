import React, { useContext } from 'react'
import AOS from 'aos';
import skills_data from "./utils/skills_data.json"
import 'aos/dist/aos.css';
import Skill_block from './utils/Skill_block';
import { ContextProvider } from './utils/skills_context';

const Skills = () => {

    AOS.init()
    return (
        <ContextProvider>
            {
                skills_data.map((item,index) => {
                    return <Skill_block key={index} data={item}/>
                })
            }
        </ContextProvider>
    )
}

export default Skills