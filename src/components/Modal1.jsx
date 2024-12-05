import React from 'react';
import styles from './modal1.module.css'

const Modal1 = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (    
    <div onClick={onClose} className={styles.overlay}>   
        <div onClick={(e) => { e.stopPropagation();}} className={styles.modalContainer}>
            <button onClick={onClose}><img src='src/assets/images.jpg'/></button>
            <div>
                <h1>Reserva Confirmada!</h1>
                <p>Sua reserva foi confirmada com sucesso para a sessão selecionada.</p>
                <p>Estamos felizes em tê-lo conosco para essa experiência cinematográfica. Prepare-se para se envolver em uma jornada emocionante na tela grande!</p>
            </div> 
        </div>
    </div>
  );
};

export default Modal1;