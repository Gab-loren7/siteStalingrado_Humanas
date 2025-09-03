import React from 'react'
import Styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar.js'

let Home = () => {
    return (
        <div>
            <Navbar />

            <div className={Styles.Capa} />
            <div className={Styles.Main}>
                <div className={Styles.Titulo}>
                    <h1>Stalingrado: ponto de virada no Leste</h1>
                    <p>Stalingrado e pesquisando a experiência de guerra</p>
                </div>
            </div>
        </div>
    );
}

export default Home;