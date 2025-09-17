import React from 'react'
import Styles from './CompTexto.module.css'

let CompTexto = ({ Texto, Font, Url }) => {
    return (
        <div className={Styles.containerText}>
            <div>
                <span className={Styles.texto}>
                    {Texto}
                </span>
            </div>
            <div  className={Styles.espaco}/>
            <a href={props.Url} target="_blank" rel="noopener noreferrer">{props.Font}</a>
        </div>
    )
}

export default CompTexto;
