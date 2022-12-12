import { createContext, useState } from "react";

export const ContextProyecto = createContext()

export const ContextProvider = ({children}) => {

    const [States, setStates] = useState(["active","","","",""])

    const handleEstado = (id_active) => {
        let newArr = ["","","","",""]
        newArr[id_active] = "active"
        setStates(newArr)
    }
    return (
        <ContextProyecto.Provider value={{States, handleEstado}}>
            {children}
        </ContextProyecto.Provider>
    )
}