import React, { useState, useEffect } from 'react';

function AdministracionIncidencias() {
    const [ticketsPendientes, setTicketsPendientes] = useState([]);
    const [ticketsResueltos, setTicketsResueltos] = useState([]);

    useEffect(() => {
        obtenerTicketsPendientes();
        obtenerTicketsResueltos();
    }, []);

    const obtenerTicketsPendientes = async () => {
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsPendientes');
            const data = await response.json();
            setTicketsPendientes(data);
        } catch (error) {
            console.error('Error fetching tickets pendientes:', error);
        }
    };

    const obtenerTicketsResueltos = async () => {
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsResueltos');
            const data = await response.json();
            setTicketsResueltos(data);
        } catch (error) {
            console.error('Error fetching tickets resueltos:', error);
        }
    };

    return (
        <main className="container mt-5">
            <h1>Administración de incidencias</h1>
            <h2 className="mt-5">Tickets pendientes</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ticketsPendientes.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.codigo}</td>
                            <td>{ticket.fecha}</td>
                            <td>{ticket.aula}</td>
                            <td>{ticket.grupo}</td>
                            <td>{ticket.ordenador}</td>
                            <td>{ticket.descripcion}</td>
                            <td>{ticket.alumno}</td>
                            <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
                        <td><button className="btn btn-warning" title="Añadir comentario"><i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
                        <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
                        <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="mt-5">Tickets resueltos</h2>
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
                        <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default AdministracionIncidencias;
