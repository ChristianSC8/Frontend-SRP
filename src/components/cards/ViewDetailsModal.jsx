import React from 'react';

const ViewDetailsModal = ({ reservation, closeModal }) => {
  return (
    <div className="view-details-modal-overlay">
      <div className="view-details-modal">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2 className="modal-title">Detalles de la Reserva</h2>
        {reservation && (
          <div className="details-content">
            <p><span className="detail-label">Cliente:</span> {reservation.nombreCliente}</p>
            <p><span className="detail-label">Teléfono:</span> {reservation.telefonoCliente}</p>
            <p><span className="detail-label">Personas:</span> {reservation.cantidadPasajeros}</p>
            <p><span className="detail-label">Fecha:</span> {reservation.fechaInicio}</p>
            <p><span className="detail-label">Paquete:</span> {reservation.paqueteDeVuelo.nombre_paquete}</p>
            <p><span className="detail-label">Precio:</span> {reservation.paqueteDeVuelo.precio}</p>
            <p><span className="detail-label">Estado del pago:</span> {reservation.estadoPago.nombre}</p>
            {/* Agrega más detalles según tus necesidades */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDetailsModal;
