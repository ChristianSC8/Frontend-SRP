import './sidebar.css'
import react from "../../assets/react.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function sidebar({isSidebarClose}){

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdowntwoOpen, setDropdowntwoOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdowntwo = () => {
        setDropdowntwoOpen(!isDropdowntwoOpen);
    };

    return (
        <>
            <section className='container-sidebar'>
                
                <div className="component-header">
                    <span className="header-logo">
                        <img src={react}/>
                    </span>
                    <div className="text-logo">
                        <span className={`text-info text-one ${isSidebarClose ? 'text-info' : 'close-text-logo'}`}>Proyecto</span>
                        <span className={`text-info text-two ${isSidebarClose ? 'text-info' : 'close-text-logo'}`}>Web</span>
                    </div>
                </div>

                <div className="content-navigation">

                    <div className="navigation-top">
                        <div className="navigation-search">
                            <div className="search-input">
                                <span className="input-icon">
                                    <i className='bx bx-search'></i>
                                </span>
                                <form action="" className='input-content'>
                                    <input type="text" id="search-input" placeholder="Buscar" />
                                </form>
                            </div>
                        </div>

                        <div className="navigation-menu">
                            <ul className="menu-item">
                                <div className="title-menu" >
                                    <span className={`title ${isSidebarClose ? 'title' : 'title-close'}`}>Navegacion</span>
                                    <span className={`line ${isSidebarClose ? 'line' : 'text-line'}`}></span>
                                </div>  
                                <li className="item">
                                    <Link to={"start"}className="link">
                                        <div className="link-icon">
                                            <i className='bx bxs-dashboard'></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to={"start"}className="link">
                                        <div className="link-icon">
                                            <i className='bx bxs-dashboard'></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Reserva</span>
                                    </Link>
                                </li>
                                <li className="item ">
                                    <Link to={'package'} className="link">
                                        <div className="link-icon">
                                            <i className='bx bxs-dashboard'></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Paquetes</span>
                                    </Link>
                                </li>
                                {/* dropdoen */}
                                <li className="item " >
                                    <a className="link" onClick={toggleDropdown}>
                                        <div className="link-icon">
                                            <i className='bx bxs-server'></i>
                                        </div>
                                        <div className="text-icon-rotate" >
                                            <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Pago</span>
                                            <i className={`bx bx-chevron-right dropdown-open ${isDropdownOpen? 'rotate-icon' : ''}`}></i>
                                        </div>
                                    </a>
                                    <div className={`dropdown ${isDropdownOpen ? 'active-dropdown' : ''} ${isSidebarClose ? 'dropdown ' : 'remov-margin'}`}>
                                        <ul className={`dropdown-option ${isDropdownOpen ? 'visible-dropdown' : ''}`}>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <i className='bx bxs-doughnut-chart' ></i>
                                                </div>
                                                <span className="text-option">Categoria</span>
                                            </li>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <i className='bx bxs-speaker' ></i>
                                                </div>
                                                <span className="text-option">Producto</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="item ">
                                    <Link to={'package'} className="link">
                                        <div className="link-icon">
                                            <i className='bx bxs-dashboard'></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Usuarios</span>
                                    </Link>
                                </li>
                                {/* dropdoen */}
                                <li className="item " >
                                    <a className="link" onClick={toggleDropdowntwo}>
                                        <div className="link-icon">
                                            <i className='bx bxs-server'></i>
                                        </div>
                                        <div className="text-icon-rotate" >
                                            <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Pago</span>
                                            <i className={`bx bx-chevron-right dropdown-open ${isDropdowntwoOpen? 'rotate-icon' : ''}`}></i>
                                        </div>
                                    </a>
                                    <div className={`dropdown ${isDropdowntwoOpen ? 'active-dropdown' : ''} ${isSidebarClose ? 'dropdown ' : 'remov-margin'}`}>
                                        <ul className={`dropdown-option ${isDropdowntwoOpen ? 'visible-dropdown' : ''}`}>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <i className='bx bxs-doughnut-chart' ></i>
                                                </div>
                                                <span className="text-option">Categoria</span>
                                            </li>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <i className='bx bxs-speaker' ></i>
                                                </div>
                                                <span className="text-option">Producto</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>









                            </ul>
                        </div>
                    </div>

                    <div className="navigation-bottom" >

                        <div className="navigation-accout">
                            <ul className="account-item">
                                <div className="title-account" >
                                <span className={`title ${isSidebarClose ? 'title' : 'title-close'}`}>Cuenta</span>
                                    <span className={`line ${isSidebarClose ? 'line' : 'text-line'}`}></span>
                                </div>  
                                <li className="item">
                                    <a href="#" className="link">
                                        <div className="link-icon">
                                            <i className='bx bxs-bell' ></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`} >Notificaciones</span>
                                    </a>
                                </li>    
                                <li className="item">
                                    <a href="#" className="link">
                                        <div className="link-icon">
                                            <i className='bx bx-cog' ></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Ajustes</span>
                                    </a>
                                </li> 
                                <li className="item"> 
                                    <a href="#" className="link">
                                        <div className="link-icon">
                                            <i className='bx bx-log-out-circle'></i>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`} >Cerrar secion</span>
                                    </a>
                                </li>        
                            </ul>
                        </div>
                        <div className="navigation-theme">
                            <div className="theme-state">
                                <div className={`theme-items ${isSidebarClose ? 'theme-items' : 'theme-close'}`}>
                                    <div className="sun" id="sun"></div>
                                    <div className="moon" id="moon"></div>
                                </div>
                                <div className={`btn-togle ${isSidebarClose ? 'btn-togle' : 'open-togle'}`}></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default sidebar