import { useState } from 'react';
import TablaPendientes from "../componentes/TablaPendientes";
import TablaResueltos from "../componentes/TablaResueltos";

function AdministracionIncidencias() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [nuevoTicket, setNuevoTicket] = useState({
        codigo: '',
        fecha: '',
        aula: '',
        grupo: '',
        ordenador: '',
        descripcion: '',
        alumno: ''
    });
    const [actualizarTabla, setActualizarTabla] = useState(false);

    const abrirModal = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    const actualizarNuevoTicket = (e) => {
        const { name, value } = e.target;
        setNuevoTicket(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const enviarNuevoTicket = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://json-examen.vercel.app/ticketsPendientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoTicket)
            });
            if (!response.ok) {
                throw new Error('Error al crear nuevo ticket');
            }
         
            setActualizarTabla(prevState => !prevState);
            cerrarModal();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className="container mt-5">
            <h1>Administración de incidencias</h1>
            <button className="btn btn-primary" onClick={abrirModal}>Crear Nuevo Ticket</button>
            <h2 className="mt-5">Tickets pendientes</h2>
            
            <TablaPendientes key={actualizarTabla} />
            <h2 className="mt-5">Tickets resueltos</h2>
            <TablaResueltos />
            {mostrarModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Ticket</h5>
                                <button type="button" className="btn-close" onClick={cerrarModal}></button>
                            </div>
                            <div className="modal-body">
                            <form onSubmit={enviarNuevoTicket}>
                                    <div className="mb-3">
                                        <label htmlFor="codigo" className="form-label">Código</label>
                                        <input type="text" className="form-control" id="codigo" name="codigo" value={nuevoTicket.codigo} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fecha" className="form-label">Fecha</label>
                                        <input type="text" className="form-control" id="fecha" name="fecha" value={nuevoTicket.fecha} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="aula" className="form-label">Aula</label>
                                        <input type="text" className="form-control" id="aula" name="aula" value={nuevoTicket.aula} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="grupo" className="form-label">Grupo</label>
                                        <input type="text" className="form-control" id="grupo" name="grupo" value={nuevoTicket.grupo} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ordenador" className="form-label">Ordenador</label>
                                        <input type="text" className="form-control" id="ordenador" name="ordenador" value={nuevoTicket.ordenador} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                                        <input type="text" className="form-control" id="descripcion" name="descripcion" value={nuevoTicket.descripcion} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="alumno" className="form-label">Alumno</label>
                                        <input type="text" className="form-control" id="alumno" name="alumno" value={nuevoTicket.alumno} onChange={actualizarNuevoTicket} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Crear Ticket</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default AdministracionIncidencias;
