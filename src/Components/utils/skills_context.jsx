import { createContext, useState } from "react";

export const ContextSkill = createContext()

export const ContextProvider = ({children}) => {

    const [States, setStates] = useState(["","","","","","","","","","","","","","","","","","",""])

    const handleEstado = (id_active) => {
        if (States[id_active] === "active") {
            setStates(["","","","","","","","","","","","","","","","","","",""])
        } else {
            let newArr = ["","","","","","","","","","","","","","","","","","",""]
            newArr[id_active] = "active"
            setStates(newArr)
        }
    }
    return (
        <ContextSkill.Provider value={{States, handleEstado}}>
            {children}
        </ContextSkill.Provider>
    )
}
