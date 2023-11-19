import React from "react";
import './ModalPyMethods.css'

function ModalPyMethods({stateMtd, setStateMtd, mtdmode}){

    const closeModalMethod = () => {
        setStateMtd(false);
    };

    return(
        stateMtd && (
            <>
                <div className="container-modal-accounts">
                    <div className="content-modal-accounts">
                        <div className="header-methods">
                            <div className="title-closeMetds">
                                <span>{mtdmode === 'create' ? 'Nuevo Paquete':'update'}</span>
                                <button className="ico-close-metds" type='button' onClick={closeModalMethod}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <form className="form-methods">
                            <div className="content-inputs">
                                <div className="img-inputs-nde">
                                    <div className="img-method">
                                        <div className="view-img">

                                        </div>
                                        <div className="upload-img">
                                            {/* <input type="file" /> */}
                                        </div>
                                    </div>
                                    <div className="inputs-text-methods">
                                        <div className="input-name-method">
                                            <input type="text" />
                                            <label className="title-name-method">Nombre</label>
                                        </div>
                                        <div className="area-description-method">
                                            <textarea></textarea>
                                            <label className="title-description-method">Descripcion</label>
                                        </div> 
                                        <div className="state-method">
                                            <label className="title-state-method">Estado</label>
                                            <div className="state-active-method">
                                                <input type="radio" name="stateMethod"/>
                                                <label className="title-active-metd">Activo</label>
                                            </div>
                                            <div className="state-inactive-method">
                                                <input type="radio" name="stateMethod" />
                                                <label className="title-inactive-metd">Inactivo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputs-num-cci">
                                    <div className="content-num-cci">
                                        <div className="input-number-method">
                                            <input type="text" />
                                            <label className="title-number-method">Numero</label>
                                        </div>
                                        <div className="input-cci-method">
                                            <input type="text" />
                                            <label className="title-cci-method">CCI</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons-methods">
                                
                                {mtdmode === 'create' ? 
                                    (<button type="button" className="button-save-method">Crear</button>) 
                                    : 
                                    (<button type="button" className="button-save-method">Editar</button>)
                                }
                                <button type="button" onClick={closeModalMethod} className="button-cancel-method">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
        
    )
}
export default ModalPyMethods;