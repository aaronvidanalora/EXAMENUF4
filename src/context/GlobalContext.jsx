/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [titulo, setTitulo] = useState('');
    const [historias, setHistorias] = useState([]); 
    const [dataHistoria, setDataHistoria] = useState(); 

    

    return (
        <GlobalContext.Provider value={{ 
            titulo, 
            setTitulo, 
            
            historias, 
            setHistorias,
            dataHistoria, 
            setDataHistoria 
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
