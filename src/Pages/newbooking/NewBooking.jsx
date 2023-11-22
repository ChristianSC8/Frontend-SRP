import React, { useState } from "react";
import CreateButton from "../../components/Buttons/CreateButton";
// import './Reservations.css'
import ModalReserva from "../../components/Modal/ModalReserva";

function NewBooking(){

    const [stateModalResv, setModalStateResv] = useState(false)
    const [modalModeResv, setModalModeResv] = useState('create');

    const openModalResv = (modeResv) => {
        setModalModeResv(modeResv);
        setModalStateResv(true);
    };

    return(
        <> 
            <div className="package-container">
                <div className="container">
                    <div className="header-info">
                </div>
                    <div className="content-info">
                        <div className="content-top ">
                            <div className="options-left">
                            <CreateButton text='Nuevo' openModalResv={openModalResv} />
                            </div>
                            <div className="options-right reservations">
                                <div className="reservations-search">
                                    <input type="text" placeholder="Buscar reserva"/>
                                    <div className="icon-search-reserva">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" />
                                        </svg>
                                    </div>
                                </div>  
                                <span className="spacer-reservations"></span>
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
                                            <th className="th-number-reser">N</th>
                                            <th>Clinte</th>
                                            <th>Telefono</th>
                                            <th>Personas</th>
                                            <th>Fecha</th>
                                            <th>Hora</th>
                                            <th>Paquete</th>
                                            <th>Pago</th>
                                            <th>Estado Pago</th>
                                            <th>Asesor</th>
                                            <th className="new-booking">Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="table-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="th-number-reser">1</td>
                                            <td>Christian Supo</td>
                                            <td>934592245</td>
                                            <td>2</td>
                                            <td>12/10/2023</td>
                                            <td>11:30:00</td>
                                            <td>Fly Black</td>
                                            <td>Yape</td>
                                            <td>Adelanto</td>
                                            <td>Christan</td>
                                            <td className="new-booking">
                                                <div className="content-actions">
                                                    <button className="ico-update-package" onClick={() => openModalResv('update')}>
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
            <ModalReserva stateResv={stateModalResv} setStateResv={setModalStateResv} modeResv={modalModeResv}/> 
        </>
    )
}
export default NewBooking;