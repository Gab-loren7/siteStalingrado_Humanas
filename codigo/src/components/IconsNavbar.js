import React from 'react'
import Styles from './Navbar/Navbar.module.css';

import localData from '../img/Icons_localData.png';
import forcasPerdas from '../img/logoForcas&Perdas-03.png';
import tecnologiasTaticas from '../img/LogoTecnologias-03.png';
import curiosidadesHistoricas from '../img/logoCuriosidadesHistoricas-04.png';
import leiturasRecomendadas from '../img/LogoLeiturasObrigatorias-05.png';

const IconsNavbar = () => {
  
  // Função de scroll suave com offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -40; // ajusta esse valor conforme a margem que quiser
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={Styles.container_Navbar}>
      <ul>
        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('InicioDirecao')}>
            <span className={Styles.icon}><i className="bi bi-house-fill" /></span>
            <span className={Styles.txt_link}>Início</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('DataLocal')}>
            <span className={Styles.icon}><img src={localData} alt="Data e Local" /></span>
            <span className={Styles.txt_link}>Data e Local</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('ResumoEstrategia')}>
            <span className={Styles.icon}><i className="bi bi-file-earmark-text-fill" /></span>
            <span className={Styles.txt_link}>Resumo Estratégico</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('ForcasEPerdas')}>
            <span className={Styles.icon}><img src={forcasPerdas} alt="Forças e Perdas" /></span>
            <span className={Styles.txt_link}>Forças e Perdas</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('TecnologiasTaticas')}>
            <span className={Styles.icon}><img src={tecnologiasTaticas} alt="Tecnologias e Táticas" /></span>
            <span className={Styles.txt_link}>Técnologias e Táticas</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('CuriosidadesHistoricas')}>
            <span className={Styles.icon}><img src={curiosidadesHistoricas} alt="Curiosidades" /></span>
            <span className={Styles.txt_link}>Curiosidades Históricas</span>
          </button>
        </li>

        <li className={Styles.item_menu}>
          <button onClick={() => scrollToSection('LeiturasRecomendadas')}>
            <span className={Styles.icon}><img src={leiturasRecomendadas} alt="Leituras" /></span>
            <span className={Styles.txt_link}>Leituras Recomendadas</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default IconsNavbar;