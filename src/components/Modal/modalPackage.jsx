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
                        <div className="content-img">
                            <div className="img">
                            </div>
                        </div>
                        <div className="content-infoInpts">
                            <div className="header-content">
                                <div className="header-transform">
                                    <span className="title-content">{mode === 'create' ? 'Nuevo':'update'}</span>
                                    <button className="close-icon" onClick={closeModal}>
                                        <i className='bx bx-cross btn-close' ></i>
                                    </button>
                                </div>
                            </div>
                            <div className="content-information">
                                <div className="content-inputs">
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
                                        (<button type="button">Crear</button>) 
                                        : 
                                        (<button type="button">Editar</button>)
                                    }
                                    <button onClick={closeModal}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    );
}

export default ModalPackage;