import React from 'react';
import styles from './modalCard.module.css'

const ModalCard = ({number, name, cvv, cpf, data_venc, tipo}) => {
    return (    
    <section  className={styles.modalCard}>   
        <section>
            <p>{name}</p>
            <p>{number}</p>
            <section>
                <p>venc: <span>{data_venc}</span></p>
                <p>cvv: <span>XXX</span></p>
            </section>
        </section>
    </section>
  );
};

export default ModalCard;