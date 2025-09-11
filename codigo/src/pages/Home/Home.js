import React from 'react';
import Styles from './Home.module.css';

import Navbar from '../../components/Navbar/Navbar.js';
import CompTitulo from '../../components/CompTitulo/CompTitulo.js';
import CompTexto from '../../components/CompTexto/CompTexto.js';

import img_dataLocal from '../../img/Data&Local.png';
import img_resumoestrategia from '../../img/imgMapa.webp';
import imgForcasPerdas1 from '../../img/Forças&Perdas1.jpg';
import imgForcasPerdas2 from '../../img/Forças&Perdas2.png';
import imgForcasPerdas3 from '../../img/Forças&Perdas3.jpg';

let Home = () => {


    return (
        <div>
            <Navbar />
            <div className={Styles.Container}>
                <div className={Styles.Capa} id='InicioDirecao' />
                <div className={Styles.Main}>

                    {/* Container Tiutlo Site */}
                    <div className={Styles.Titulo}>
                        <h1>Stalingrado: ponto de virada no Leste</h1>
                        <p>Pesquisando a experiência de guerra. </p>
                    </div>
                    {/* FIM Container Tiutlo Site */}

                    {/* Container Data e Local */}
                    <div className={Styles.container_dataLocal} id='DataLocal'>
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo={'Data e Local'} />
                            <CompTexto Texto={'A Batalha de Stalingrado ocorreu entre agosto de 1942 e fevereiro de 1943, na cidade de Stalingrado (atual Volgogrado), situada às margens do rio Volga. O local possuía uma importância estratégica imensa, pois era um grande centro industrial e de transportes, além de carregar o nome de Josef Stálin, líder soviético, o que dava ao confronto também uma forte dimensão simbólica. A cidade tornou-se o palco de um dos maiores embates da história militar, onde duas potências se enfrentaram não apenas pelo controle territorial, mas também pelo prestígio e pela moral de suas nações.'} Font={'🔗 Fonte: culturahistorica.org'} Url={''} />
                        </div>
                        <img src={img_dataLocal} className={Styles.img_dataLocal} />
                    </div>
                    {/* FIM Container Data e Local */}


                    {/* Container Resumo e Estrategias */}
                    <div className={Styles.container_resumoestrategia} id='ResumoEstrategia' >
                        <img src={img_resumoestrategia} className={Styles.img_resumoestrategia} />
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo={'Resumo e Estratégia'} />
                            <CompTexto Texto={'O objetivo da Alemanha nazista era conquistar Stalingrado para garantir o controle sobre as rotas do rio Volga e abrir caminho para a exploração das riquezas petrolíferas do Cáucaso. No entanto, após meses de intensos combates, os soviéticos lançaram a Operação Urano, que envolveu um gigantesco contra-ataque de cerco às tropas alemãs. A manobra conseguiu isolar completamente a 6ª Exército, comandada pelo marechal Friedrich Paulus, que ficou sem suprimentos e sem chance de escapar. A derrota culminou na rendição alemã em fevereiro de 1943, representando o fim da ofensiva nazista no sul da União Soviética e marcando um ponto de virada decisivo na Segunda Guerra Mundial.'} Font={'🔗 Fonte: Wikipedia'} Url={''} />
                        </div>
                    </div>
                    {/* FIM Container Resumo e Estrategias */}

                    {/* Container Forças e Perdas */}
                    <div className={Styles.container_forcasPerdas} id='ForcasEPerdas'>
                        <CompTitulo Titulo={'Forças e Perdas'}  />

                        <div className={Styles.galeriaFotos}>
                            <div className={Styles.boxfotoTop} >
                                <img src={imgForcasPerdas1} />
                                <img src={imgForcasPerdas2} />
                            </div>
                            <img src={imgForcasPerdas3} className={Styles.imgSoldado} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;