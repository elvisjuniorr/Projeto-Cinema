import styles from './modal.module.css'

const Modal = ({ isOpen, onClose, isOpenNextModal }) => {
    if (!isOpen ) return null;
    // console.log(!open);
    // console.log(open);  
    // console.log(onClose);
    // console.log(openModal1);


    return (
        <div onClick={onClose} className={styles.overlay}>
            <div  className={styles.modalContainer}>          
                <img src="src/assets/texto_model.svg"/>
                <div>
                    <button onClick={onClose}><img src="src/assets/cancelar_botao.svg"/></button>
                    <button onClick={isOpenNextModal}><img src="src/assets/confirmar_botao.svg"/></button>
                </div>
            </div>
        </div>
    );  
};

export default Modal;