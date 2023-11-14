import React from "react";
import './modalPackage.css'
const ModalPackage = ({ state, setState, mode }) => {
    
    const closeModal = () => {
        setState(false);
    };

    return (
        state && (
            <>
                <div className="container-modal">
                    <form className="content-modal">
                        <div className="container-image">
                            <div className="content-image">
                                <div className="view-image">
                                    {/* ----Aqui la Imagen---- */}
                                </div>
                                <div className="select-image">
                                    
                                </div>
                            </div>
                        </div>








                        <div className="content-infoInpts">
                            <div className="inputs-forms">
                                <div className="header-content">
                                    <div className="header-transform">
                                        <span className="title-content">{mode === 'create' ? 'Nuevo Paquete':'update'}</span>
                                        <button className="button-close" onClick={closeModal}>
                                            <ion-icon name="close-outline" className="ico-close"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                                <div className="input-name">
                                    <input type="text" />
                                    <label className="title-name">Nombre</label>
                                </div>
                                <div className="inputs-price-state">
                                    <div className="input-price">
                                        <input type="text"/>
                                        <label className="title-price">Precio</label>
                                    </div>
                                    <div className="input-state">
                                        <input type="text"/>
                                        <label className="title-state">Estado</label>
                                    </div>
                                </div>
                                <div className="input-description">
                                    <textarea className="input-description"></textarea>
                                    <label className="title-description">Descripcion</label>
                                </div>                                
                            </div>

                            <div className="buttons">
                                {mode === 'create' ? 
                                    (<button type="button" className="button-save">Crear</button>) 
                                    : 
                                    (<button type="button" className="button-save">Editar</button>)
                                }
                                <button onClick={closeModal} className="button-cancel">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    );
}

export default ModalPackage;