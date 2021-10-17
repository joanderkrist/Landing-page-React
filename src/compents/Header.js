import React from 'react';

const HeaderBootstrap = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
           
            <a className="navbar-brand text-light" href="#">Start Boostrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"/>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Services</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                </ul>
               
            </div>
        </nav>
    );
};

export default HeaderBootstrap ;
