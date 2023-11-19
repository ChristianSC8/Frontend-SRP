import React, { useState } from "react";
import './Package.css'
import ModalPackage from "../../components/Modal/modalPackage";
import CreateButton from "../../components/Buttons/CreateButton";

function Package(){

    const [stateModal, setModalState] = useState(false)
    const [modalMode, setModalMode] = useState('create');

    const openModal = (mode) => {
        setModalMode(mode);
        setModalState(true);
    };

    return (
        <>
            <div className="package-container">
                <div className="container">
                    <div className="header-info">
                </div>
                    <div className="content-info">
                        <div className="content-top">
                            <div className="options-left">
                            <CreateButton text='Nuevo' openModal={openModal} />
                            </div>
                            <div className="options-right">
                                <div className="option-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/>
                                        <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
                                        <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/>
                                        <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
                                    </svg>
                                </div>
                                <div className="option-list">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M4.5,7A3.477,3.477,0,0,1,2.025,5.975L.5,4.62a1.5,1.5,0,0,1,2-2.24L4.084,3.794A.584.584,0,0,0,4.5,4a.5.5,0,0,0,.353-.146L8.466.414a1.5,1.5,0,0,1,2.068,2.172L6.948,6A3.449,3.449,0,0,1,4.5,7ZM24,3.5A1.5,1.5,0,0,0,22.5,2h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,3.5ZM6.948,14l3.586-3.414A1.5,1.5,0,0,0,8.466,8.414l-3.613,3.44a.5.5,0,0,1-.707,0L2.561,10.268A1.5,1.5,0,0,0,.439,12.39l1.586,1.585A3.5,3.5,0,0,0,6.948,14ZM24,11.5A1.5,1.5,0,0,0,22.5,10h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,11.5ZM6.948,22l3.586-3.414a1.5,1.5,0,0,0-2.068-2.172l-3.613,3.44A.5.5,0,0,1,4.5,20a.584.584,0,0,1-.416-.206L2.5,18.38a1.5,1.5,0,0,0-2,2.24l1.523,1.355A3.5,3.5,0,0,0,6.948,22ZM24,19.5A1.5,1.5,0,0,0,22.5,18h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,19.5Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="th-number-package">N</th>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Estado</th>
                                            <th>Tiempo</th>
                                            <th>Precio</th>
                                            <th className="op-package">Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="table-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="th-number-package">1</td>
                                            <td>
                                                <div className="img-package">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ac1jJl733ccE87JCYvKblAlKvfSe_7W3x68lY38OFj4L2qyl8M7LHKSuOb2Ys_sO-eo&usqp=CAU" alt="" />
                                                </div>
                                            </td>
                                            <td>Fly Especiales</td>
                                            <td>Paquete parapente</td>
                                            <td>Activo</td>
                                            <td>12min</td>
                                            <td>$400</td>
                                            <td className="op-package"> 
                                                <div className="content-actions">
                                                    <button className="ico-update-package" onClick={() => openModal('update')}>
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <path d="M22.64 5.333c-0.287 0-0.575 0.109-0.794 0.329l-1.917 1.917 4.491 4.491 1.917-1.917c0.439-0.439 0.439-1.15 0-1.588l-2.903-2.904c-0.22-0.22-0.507-0.329-0.794-0.329zM18.245 9.263l-12.912 12.912v4.491h4.491l12.912-12.912-4.491-4.491z"></path>
                                                        </svg>
                                                    </button>
                                                    <button className="ico-delete-package">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <path d="M25.291 5.313v2.688h-18.624v-2.688h4.625l1.375-1.313h6.625l1.375 1.313h4.625zM7.979 25.312v-15.999h15.999v15.999c0 1.438-1.25 2.688-2.688 2.688h-10.625c-1.438 0-2.688-1.25-2.688-2.688h0.001z"></path>
                                                        </svg>
                                                    </button>
                                                    <button className="ico-view-package">
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32">
                                                            <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z"/>
                                                            <circle cx="12" cy="12" r="4"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="content-button">
                            <span>pagination</span>
                        </div> 
                    </div>
                </div>
            </div>
            <ModalPackage state={stateModal} setState={setModalState} mode={modalMode}/>
        </>
    );
}   
export default Package;