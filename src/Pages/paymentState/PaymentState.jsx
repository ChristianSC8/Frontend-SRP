import React, { useState, useEffect } from "react";
import ModalPyState from "../../components/Modal/ModalPyState";
import CreateButton from "../../components/Buttons/CreateButton";
import axios from "axios";

function PaymentState() {
    const [stateModalSet, setModalStateSet] = useState(false);
    const [modalModeState, setModalModeState] = useState('create');
    const [estados, setEstados] = useState([]);
    const [newEstado, setNewEstado] = useState({
        nombre: '',
        descripcion: '',
    });

    useEffect(() => {
        fetchEstados();
    }, []);

    const fetchEstados = async () => {
        try {
            const response = await axios.get("http://localhost:5000/estado");
            setEstados(response.data);
        } catch (error) {
            console.error("Error fetching estados:", error);
        }
    };

    const openModalPay = (modeState) => {
        setModalModeState(modeState);
        setModalStateSet(true);
    };

    const handleSaveEstado = async () => {
        try {
            if (!newEstado.nombre.trim() || !newEstado.descripcion.trim()) {
                console.error("Nombre y descripción son campos obligatorios.");
                return;
            }

            let response;

            if (modalModeState === 'create') {
                response = await axios.post("http://localhost:5000/estado", newEstado);
                console.log("Nuevo estado de pago creado:", response.data);
            } else {
                const estadoId = obtenerIdDelEstado(); // Asegúrate de que tienes esta función definida
                if (!estadoId) {
                    console.error("No se pudo obtener el ID del estado para la actualización.");
                    return;
                }

                response = await axios.put(`http://localhost:5000/estado/${estadoId}`, newEstado);
                console.log("Estado de pago actualizado:", response.data);
            }

            // Limpiar el nuevo estado después de la creación/actualización
            setNewEstado({ nombre: '', descripcion: '' });

            // Esperar a que la operación se complete antes de actualizar la lista y cerrar el modal
            await fetchEstados();

            // Cierra el modal después de completar las operaciones
            setModalStateSet(false);
            console.log('newEstado después de cerrar el modal:', newEstado);
        } catch (error) {
            console.error("Error saving estado:", error);
        }
    };

    return (
        <>
            <div className="package-container">
                <div className="container">
                    <div className="header-info"></div>
                    <div className="content-info">
                        <div className="content-top">
                            <div className="options-left">
                                <CreateButton text='Nuevo' openModalState={() => openModalPay('create')} />
                            </div>
                            <div className="options-right">
                                <div className="option-card">
                                    {/* Iconos */}
                                </div>
                                <div className="option-list">
                                    {/* Iconos */}
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>N</th>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="table-content">
                                <table>
                                    <tbody>
                                        {estados.map((estado, index) => (
                                            <tr key={estado.id}>
                                                <td>{index + 1}</td>
                                                <td>{estado.nombre}</td>
                                                <td>{estado.descripcion}</td>
                                                <td>
                                                <div className="content-actions">
                                                    <button className="ico-update-package" onClick={() => openModalPay('update')}>
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
                                        ))}
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
            <ModalPyState
                statePay={stateModalSet}
                setStatePay={setModalStateSet}
                modePay={modalModeState}
                onSaveEstado={handleSaveEstado}
                newEstado={newEstado}
                setNewEstado={setNewEstado} // Asegúrate de pasar setNewEstado
            />
        </>
    );
}

export default PaymentState;
