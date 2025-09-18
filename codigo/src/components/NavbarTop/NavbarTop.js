import React from 'react'
import Styles from './NavbarTop.module.css'

import IconsNavbar from '../IconsNavbar'

const NavbarTop = () => {
  return (
    <div>
        <div className={Styles.container}>
            <IconsNavbar className={Styles.ListIcons} />
            <div className={Styles.container_Ham}>
            <button className={Styles.hamburguer} />
            </div>
        </div>
    </div>
  )
}

export default NavbarTop