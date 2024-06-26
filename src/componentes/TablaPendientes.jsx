import { useState, useEffect } from 'react'

function TablaPendientes() {
    const [ticketsPendientes, setTicketsPendientes] = useState([])

    useEffect(() => {
        obtenerTicketsPendientes()
    }, [])

    const obtenerTicketsPendientes = async () => {
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsPendientes')
            const data = await response.json()
            data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            setTicketsPendientes(data)
        } catch (error) {
            console.error('Error fetching tickets pendientes:', error)
        }
    }

    const borrarTicket = async (id) => {
        try {
            const response = await fetch(`https://json-examen.vercel.app/ticketsPendientes/${id}`, { method: 'DELETE' })

            if (!response.ok) {
                throw new Error('Error al borrar la historia')
            }

            setTicketsPendientes(prevTicketsPendientes => {
                return prevTicketsPendientes.filter(ticket => ticket.id !== id)
            })
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
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
                        <td>
                            <button className="btn btn-success" title="Resolver ticket">Resolver</button>
                        </td>
                        <td>
                            <button className="btn btn-warning" title="Añadir comentario">
                                <i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-info" title="Ver comentarios">
                                <i className="bi bi-chat-left-text"></i>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger" title="Eliminar ticket" onClick={() => borrarTicket(ticket.id)}>
                                <i className="bi bi-trash3"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TablaPendientes