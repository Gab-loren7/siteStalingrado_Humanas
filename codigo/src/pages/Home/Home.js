import React from 'react'
import Styles from './Home.module.css'

import Navbar from '../../components/Navbar/Navbar.js'
import img_dataLocal from '../../img/soldadoData.jpg'

let Home = () => {
    return (
        <div>
            <Navbar />

            <div className={Styles.Capa} />
            <div className={Styles.Main}>
                <div className={Styles.Titulo}>
                    <h1>Stalingrado: ponto de virada no Leste</h1>
                    <p>Pesquisando a experiência de guerra. </p>
                </div>

                <div className={Styles.container_dataLocal}>
                    <div className={Styles.Texto}>
                        <h2>Data e local</h2>
                        <p>A Batalha de Stalingrado ocorreu entre agosto de 1942 e fevereiro de 1943, na cidade de Stalingrado (atual Volgogrado), situada às margens do rio Volga. O local possuía uma importância estratégica imensa, pois era um grande centro industrial e de transportes, além de carregar o nome de Josef Stálin, líder soviético, o que dava ao confronto também uma forte dimensão simbólica. A cidade tornou-se o palco de um dos maiores embates da história militar, onde duas potências se enfrentaram não apenas pelo controle territorial, mas também pelo prestígio e pela moral de suas nações. </p>
                        <a href=''><p>🔗 Fonte: culturahistorica.org</p></a>
                        
                    </div>
                    <img src={img_dataLocal} className={Styles.img_dataLocal} />

                </div>
            </div>
        </div>
    );
}

export default Home;