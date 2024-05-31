import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [titulo, setTitulo] = useState('');
    const [historias, setHistorias] = useState([]); 
    const [dataHistoria, setDataHistoria] = useState(); 

    const actualizarHistoria = async (dataHistoria) => {
        try {
            const response = await fetch(`https://json-examen.vercel.app/historias/${dataHistoria.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Historia actualizada:', data);

            await obtenerHistoria();
        } catch (error) {
            console.error('Error actualizando la historia:', error);
        }
    };

    const obtenerTablaPendientes = async () => {
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsPendientes', { method: 'GET' });
            const data = await response.json();
            
            if (Array.isArray(data)) {
                setHistorias(data);
            } else {
                console.error('Data is not an array:', data);
            }

            console.log('DataGet: ', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const borrarHistoria = async (id) => {
        try {
            const response = await fetch(`https://json-examen.vercel.app/historias/${id}`, { method: 'DELETE' });
            
            if (!response.ok) {
                throw new Error('Error al borrar la historia');
            }
                
            setHistorias(prevHistorias => prevHistorias.filter(historia => historia.id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const anadirHistoria = async (dataHistoria) => {
        try {
            const response = await fetch(`https://json-examen.vercel.app/historias`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });
            
            if (response.ok) {
                const data = await response.json();
                setHistorias(prevHistorias => [...prevHistorias, data]);
                console.log('Historia añadida:', data);
            } else {
                console.error('Error al añadir la historia');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <GlobalContext.Provider value={{ 
            titulo, 
            setTitulo, 
            obtenerTablaPendientes, 
            actualizarHistoria, 
            borrarHistoria, 
            anadirHistoria,
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
