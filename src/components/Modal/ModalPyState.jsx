import React from "react";
import './ModalPyState.css'

function ModalPyState({statePay, setStatePay, modePay}){ 

    const closeModalPay = () => {
        setStatePay(false);
    };

    return(
        statePay &&(
            <>
                <div className="container-modal-state">
                    <div className="modal-state">
                        <div className="content-modal-state">
                            <div className="content-body-state">
                                <div className="header-state">
                                    <span className="title-state-pay">{modePay === 'create' ? 'Nuevo Paquete':'update'}</span>
                                    <button className="button-close" onClick={closeModalPay}>
                                        <ion-icon name="close-outline" className="close-icon-state"></ion-icon>
                                    </button>
                                </div>
                                <div className="input-name-state">
                                    <input type="text" />
                                    <label className="title-name-state">Nombre</label>
                                </div>
                                <div className="input-description-state">
                                    <textarea className="input-description"></textarea>
                                    <label className="title-description-state">Descripcion</label>
                                </div> 
                            </div>
                            <div className="futter-state">
                                {modePay === 'create' ? 
                                    (<button type="button" className="button-save">Crear</button>) 
                                    : 
                                    (<button type="button" className="button-save">Editar</button>)
                                }
                                <button onClick={closeModalPay} className="button-cancel">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        
    )
}
export default ModalPyState;