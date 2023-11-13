import React, { useState } from "react";
import './Package.css'
import ModalPackage from "../../components/Modal/modalPackage";

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
                        {/* ... tu código existente ... */}
                    </div>
                    <div className="content-info">
                        <div className="content-top">
                            <div className="options-left">
                                <button className="button-create" onClick={() => openModal('create')}>
                                    <span>Nuevo</span>
                                    <i className='bx bx-cross'></i>
                                </button>
                            </div>
                            <div className="options-right">
                                <div className="option-list">
                                    <i className='bx bx-menu'></i>
                                </div>
                                <div className="option-card">
                                    <i className='bx bx-category' ></i>
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>email</th>
                                            <th>password</th>
                                            <th>content</th>
                                            <th>price</th>
                                            <th>Opctions</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="table-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Chritian</td>
                                            <td>@Supo</td>
                                            <td>xdlkdr</td>
                                            <td>content</td>
                                            <td>123$</td>
                                            <td>
                                                <div className="content-actions">
                                                    <button className="ico-update" onClick={() => openModal('update')}>
                                                        <i className='bx bx-pencil'></i>
                                                    </button>
                                                    <button className="ico-delete">
                                                        <ion-icon name="trash-outline"></ion-icon>
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