import React from "react";
import './ModalReserva.css'

function ModalReserva({stateResv, setStateResv, modeResv}){

    const closeModalResv = () => {
        setStateResv(false);
    };  

    return (

        stateResv && (
            <>
                <div className="modal-container-reservations">
                    <div className="content-modal-reservat">
                        <div className="header-reservations">
                            <span className="title-reservations">Nueva reserva</span>
                            <button className="butron-close-reser" onClick={closeModalResv}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/>
                                </svg>
                            </button>
                        </div>
                        <form className="content-reservations">
                            <div className="reservations-img-inputs">
                                <div className="inputs-reservations">
                                    <div className="input-client-reserve">
                                        <input type="text" />
                                        <label className="title-client-reserve">Nombre cliente</label>
                                    </div>

                                    <div className="input-email-client">
                                        <input type="text" />
                                        <label className="title-email-client">Correo</label>
                                    </div>

                                    <div className="inputs-phone-peplo">
                                        <div className="input-phone">
                                            <input type="text"/>
                                            <label className="title-phone">Precio</label>
                                        </div>
                                        <div className="input-peple">
                                            <input type="text"/>
                                            <label className="title-peple">Cantidad de pasajeros</label>
                                        </div>
                                    </div>

                                    <div className="input-pay-form">
                                        {/* input-forma de pago */}
                                        <label className="title-pay-form">Forma de pago</label>
                                    </div>

                                    <div className="inputs-statepay-add">
                                        <div className="input-statepay">
                                            {/* inpuut de estado pago */}
                                            <label className="title-statepay">Estado pago</label>
                                        </div>
                                        <div className="input-mony">
                                            <input type="text"/>
                                            <label className="title-mony">Monto</label>
                                        </div>
                                    </div>

                                    <div className="input-package">
                                        {/* input-forma de pago */}
                                        <label className="title-package">Paquete parapente</label>
                                    </div>


                                    <div className="inputs-date-hour">
                                        <div className="input-date">
                                            <input type="text"/>
                                            <label className="title-date">Fecha</label>
                                        </div>
                                        <div className="input-hour">
                                            <input type="text"/>
                                            <label className="title-hour">Hora</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="upload-images">
                                    <div className="dragged-drop">
                                        {/* input-forma de pago */}
                                        <label className="title-draggeddrop">Combrobante</label>
                                    </div>
                                    <div className="content-img-draggd">
                                        {/* imagenes cargadas */}
                                    </div>
                                </div>
                            </div>
                            <div className="buttons-reservations">
                                {modeResv === 'create' ? 
                                    (<button type="button" className="button-save-reser">Crear</button>) 
                                    : 
                                    (<button type="button" className="button-save-reser">Editar</button>)
                                }
                                <button type="button" onClick={closeModalResv} className="button-cancel-reser">Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>

            </>
        )
        
    )
}
export default ModalReserva; 