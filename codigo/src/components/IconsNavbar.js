import React from 'react'
import Styles from './Navbar/Navbar.module.css';

import localData from '../img/Icons_localData.png'

const IconsNavbar = () => {

    return (
        <div>

            <ul>

                {/* Inicio */}
                <li className={Styles.item_menu}>
                    <a href='#InicioDirecao'>
                        <span className={Styles.icon}><i class="bi bi-house-fill" /></span>
                        <span className={Styles.txt_link}>Início</span>
                    </a>
                </li>

                {/* Data Local */}
                <li className={Styles.item_menu}>
                    <a href='#DataLocal'>
                        <span className={Styles.icon}><img src={[localData]} /></span>
                        <span className={Styles.txt_link}>Data e Local</span>
                    </a>
                </li>

            </ul>
        </div>

    );
};

export default IconsNavbar;