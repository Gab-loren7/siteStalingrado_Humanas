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
import imgTecnologiasTaticas from '../../img/bg_2.png';
import img_curiosidadesHistoricas from '../../img/CuriosidadesHistóricas.png';
import img_leiturasRecomendadas from '../../img/LeiturasRecomendadas.png';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={Styles.Container}>
                <div className={Styles.Capa} id="InicioDirecao" />
                <div className={Styles.Main}>

                    {/* Título principal */}
                    <div className={Styles.Titulo}>
                        <h1>Stalingrado: ponto de virada no Leste</h1>
                        <p>Pesquisando a experiência de guerra.</p>
                    </div>

                    {/* Data e Local */}
                    <div className={Styles.container_dataLocal} id="DataLocal">
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo="Data e Local" />
                            <CompTexto
                                Texto="A Batalha de Stalingrado ocorreu entre agosto de 1942 e fevereiro de 1943, na cidade de Stalingrado (atual Volgogrado), situada às margens do rio Volga. O local possuía uma importância estratégica imensa, pois era um grande centro industrial e de transportes, além de carregar o nome de Josef Stálin, líder soviético, o que dava ao confronto também uma forte dimensão simbólica. A cidade tornou-se o palco de um dos maiores embates da história militar, onde duas potências se enfrentaram não apenas pelo controle territorial, mas também pelo prestígio e pela moral de suas nações."
                                Font="🔗 Fonte: culturahistorica.org"
                                Url="https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?"
                            />
                        </div>
                        <img src={img_dataLocal} alt="Mapa Data e Local" className={Styles.img_dataLocal} />
                    </div>

                    {/* Resumo e Estratégia */}
                    <div className={Styles.container_resumoestrategia} id="ResumoEstrategia">
                        <img src={img_resumoestrategia} alt="Mapa Resumo Estratégico" className={Styles.img_resumoestrategia} />
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo="Resumo e Estratégia" />
                            <CompTexto
                                Texto='A Batalha de Stalingrado marcou o colapso da ofensiva alemã no sul da União Soviética e se tornou um divisor de águas da Segunda Guerra Mundial. Hitler acreditava que a conquista seria rápida, mas a resistência soviética, somada ao inverno rigoroso e à falta de suprimentos, levou à derrota nazista. Com a Operação "Urano", o Exército Vermelho cercou a 6ª Armée de Paulus, aprisionando mais de 250 mil soldados e forçando 91 mil à rendição. A queda alemã não representou apenas uma derrota militar gigantesca, mas também um golpe moral que destruiu o mito da invencibilidade nazista. A partir dali, a guerra no Leste mudou de rumo, com os soviéticos avançando até Berlim. Esse episódio também mostrou o peso da mobilização total de recursos humanos e materiais na vitória soviética.'
                                Font="🔗 Fonte: Wikipedia"
                                Url="https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com"
                            />
                        </div>
                    </div>

                    {/* Forças e Perdas */}
                    <div className={Styles.container_forcasPerdas} id="ForcasEPerdas">
                        <CompTitulo Titulo="Forças e Perdas" />
                        <div className={Styles.galeriaFotos}>
                            <div className={Styles.boxfotoTop}>
                                <img src={imgForcasPerdas1} alt="Soldados em combate 1" />
                                <img src={imgForcasPerdas2} alt="Soldados em combate 2" />
                            </div>
                            <img src={imgForcasPerdas3} alt="Soldados rendidos" className={Styles.imgSoldado} />
                        </div>

                        <div className={Styles.textwidth}>
                            <CompTexto
                                Texto="As forças envolvidas foram imensas em número e em equipamentos. De um lado, a 6ª Armée de Paulus, apoiada por unidades aliadas do Eixo, chegou a reunir centenas de milhares de soldados. Do outro, o Exército Vermelho mobilizou recursos colossais, aproveitando-se da sua capacidade de reposição em homens e equipamentos. As perdas foram brutais para ambos os lados: estima-se que mais de 1,1 milhão de soldados soviéticos foram mortos, feridos ou capturados, enquanto o lado alemão e seus aliados perderam cerca de 800 mil homens. Além disso, aproximadamente 91 mil soldados alemães se renderam e foram levados como prisioneiros de guerra, um número inédito na época, que simbolizou o colapso da ofensiva nazista no Leste. Esse saldo de baixas consolidou Stalingrado como uma das batalhas mais mortíferas da história."
                                Font="🔗 Fonte: Wikipedia"
                                Url="https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com"
                            />
                        </div>
                    </div>

                    {/* Tecnologias e Táticas */}
                    <div className={Styles.container_tecnologiasTaticas} id="TecnologiasTaticas">
                        <CompTitulo Titulo="Tecnologias e Táticas" />
                        <div className={Styles.textwidth}>
                            <img src={imgTecnologiasTaticas} alt="Tecnologias e Táticas" />
                            <CompTexto
                                Texto="O combate em Stalingrado destacou-se pelo uso massivo de novas formas de guerra urbana. A luta se desenvolveu rua por rua, quarteirão por quarteirão, edifício por edifício. Artilharia pesada e ataques aéreos eram constantemente usados, mas, devido ao cenário urbano, soldados eram obrigados a combater em proximidade extrema. Tanques foram adaptados para funções de apoio direto à infantaria, enquanto lança-chamas e metralhadoras eram amplamente utilizados dentro de prédios destruídos. A logística também foi um desafio central: tanto alemães quanto soviéticos enfrentaram dificuldades para abastecer tropas em meio ao cerco e às condições climáticas severas. Essa experiência tornou Stalingrado um estudo de caso para táticas de guerra urbana e logística em conflitos modernos."
                                Font="🔗 Fonte: culturahistorica.org"
                                Url="https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?"
                            />
                        </div>
                    </div>

                    {/* Curiosidades Históricas */}
                    <div className={Styles.container_curiosidadesHistoricas} id="CuriosidadesHistoricas">
                        <CompTitulo Titulo="Curiosidades Históricas" />
                        <div className={Styles.textwidth}>
                            <CompTexto
                                Texto="Além da importância estratégica e política, Stalingrado também é lembrada por episódios únicos de brutalidade e resistência. Soldados lutavam em espaços confinados, disputando andares de edifícios em batalhas que se tornaram lendárias. A cidade em ruínas transformou-se em um verdadeiro campo de armadilhas, onde emboscadas e ataques surpresa eram constantes. Muitos relatos descrevem combates corpo a corpo, nos quais granadas, baionetas e até ferramentas improvisadas eram usadas. Essas experiências extremas fizeram da Batalha de Stalingrado um dos exemplos mais estudados da resistência humana em condições extremas de guerra."
                                Font="🔗 Fonte: culturahistorica.org"
                                Url="https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?"
                            />
                            <img src={img_curiosidadesHistoricas} alt="Curiosidades Históricas" className={Styles.img_curiosidadesHistoricas} />
                        </div>
                    </div>

                    {/* Leituras Recomendadas */}
                    <div className={Styles.container_leiturasRecomendadas} id="LeiturasRecomendadas">
                        <CompTitulo Titulo="Leituras Recomendadas" />
                        <div className={Styles.textoImg}>
                            <img src={img_leiturasRecomendadas} alt="Livros Recomendados" className={Styles.img_leiturasRecomendadas} />
                            <div className={Styles.Texto}>
                                <CompTexto
                                    Texto="Para compreender melhor a magnitude da Batalha de Stalingrado, uma das principais obras de referência é Stalingrad, de Antony Beevor, que combina narrativa detalhada e análise histórica profunda. A leitura dessa obra, junto de outras análises historiográficas, ajuda a entender não apenas o aspecto militar, mas também a dimensão humana do sofrimento e da resistência que definiram esse marco da Segunda Guerra Mundial."
                                    Font="🔗 Fonte: Wikipedia"
                                    Url="https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer>
                    <p>© {new Date().getFullYear()} - Todos direitos reservados. Gabriel Carvalho e Lucas Josué.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;