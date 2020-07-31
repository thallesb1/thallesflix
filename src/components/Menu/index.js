import React from 'react';
import Thallesflix from '../../assets/img/Thallesflix.png';
import './Menu.css'
import Button from "../Button";

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Thallesflix}  className="Logo" alt="Thallesflix"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>

    );
}

export default Menu; 