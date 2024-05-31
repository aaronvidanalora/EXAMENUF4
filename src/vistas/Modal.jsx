import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalForm({ show, handleClose, formData, handleChange, handleSubmit }) {
    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{formData.id ? 'Edit Story' : 'Add New Story'}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">Título</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="titulo"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fecha" className="form-label">Fecha</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="fecha"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="experiencia" className="form-label">Experiencia</label>
                                <textarea
                                    className="form-control"
                                    id="experiencia"
                                    name="experiencia"
                                    value={formData.experiencia}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagen" className="form-label">Imagen URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imagen"
                                    name="imagen"
                                    value={formData.imagen}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={handleClose}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
