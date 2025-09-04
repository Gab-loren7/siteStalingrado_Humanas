import React from 'react'
import Styles from './Navbar/Navbar.module.css';

const IconsNavbar = () => {
    return (
        <div>

            <ul>

                {/* Inicio */}
                <li className={Styles.item_menu}>
                    <a href=' '>
                        <span className={Styles.icon}><i class="bi bi-house-fill" /></span>
                        <span className={Styles.txt_link}>Início</span>
                    </a>
                </li>

                {/* Promoções */}
                <li className={Styles.item_menu}>
                    <a href=' '>
                        <span className={Styles.icon}><i class="bi bi-currency-dollar icons" /></span>
                        <span className={Styles.txt_link}>Promoções</span>
                    </a>
                </li>

                {/* Perfil */}
                <li className={Styles.item_menu}>
                    <a href=' '>
                        <span className={Styles.icon}><i class="bi bi-person-circle icons" /></span>
                        <span className={Styles.txt_link}>Perfil ADM</span>
                    </a>
                </li>

                {/* Compras */}
                <li className={Styles.item_menu}>
                    <a href=' '>
                        <span className={Styles.icon}> <i class="bi bi-bag-fill" /></span>
                        <span className={Styles.txt_link}>Compras</span>
                    </a>
                </li>

                {/* Empresa */}
                <li className={Styles.item_menu}>
                    <a href=' '>
                        <span className={Styles.icon}> <i class="bi bi-building-fill icons" /></span>
                        <span className={Styles.txt_link}>Empresa</span>
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default IconsNavbar;