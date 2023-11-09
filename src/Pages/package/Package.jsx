import React from "react";
import './Package.css'

function Package(){
    return(
        <>
            <div className="package-container">
                <div className="container">
                    <div className="header-info">
                        
                    </div>
                    <div className="content-info">
                        <div className="content-top">
                            <div className="options-left">
                                <button className="button-create">
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
                            
                        </div>
                        <div className="content-button">
                            <span>pagination</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}   
export default Package;