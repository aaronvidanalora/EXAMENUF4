import { useState, useEffect } from 'react';

function TablaResueltos() {
    const [ticketsResueltos, setTicketsResueltos] = useState([]);

    useEffect(() => {
        obtenerTicketsResueltos();
    }, []);

    const obtenerTicketsResueltos = async () => {
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsResueltos');
            const data = await response.json();
            setTicketsResueltos(data);
        } catch (error) {
            console.error('Error fetching tickets resueltos:', error);
        }
    };

    const borrarTicket = async (id) => {
        try {
            const response = await fetch(`https://json-examen.vercel.app/ticketsResueltos/${id}`, { method: 'DELETE' });
            
            if (!response.ok) {
                throw new Error('Error al borrar la historia');
            }
    
 
            setTicketsResueltos(prevTicketsResueltos => {
                return prevTicketsResueltos.filter(ticket => ticket.id !== id);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Fecha</th>
                    <th>Fecha resuelto</th>
                    <th>Aula</th>
                    <th>Grupo</th>
                    <th>Ordenador</th>
                    <th>Descripción</th>
                    <th>Alumno</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {ticketsResueltos.map(ticket => (
                    <tr key={ticket.id}>
                        <td>{ticket.codigo}</td>
                        <td>{ticket.fecha}</td>
                        <td>{ticket.fechaResuelto}</td>
                        <td>{ticket.aula}</td>
                        <td>{ticket.grupo}</td>
                        <td>{ticket.ordenador}</td>
                        <td>{ticket.descripcion}</td>
                        <td>{ticket.alumno}</td>
                        <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
                        <td><button className="btn btn-danger" title="Eliminar ticket" onClick={() => borrarTicket(ticket.id)}><i className="bi bi-trash3"></i></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaResueltos;
