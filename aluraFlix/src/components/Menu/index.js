import React from  'react';
import Logo from    '../../assests/img/LogoMain.png';
import './Menu.css';
import Button from '../Button'
//import Button from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img  className="Logo" src={Logo} alt=""/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;