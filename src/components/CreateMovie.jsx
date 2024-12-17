import styles from './createMovie.module.css'
import { HiCloudArrowUp } from "react-icons/hi2";

export function CreateMovie (){
    
    return (
        <div className={styles.createMovie}>
            <form className={styles.formulario}>
                <button className={styles.buttonCreateMovie}><HiCloudArrowUp style={{fontSize: "13rem", color: "#305da8"}}/></button>
                <section className={styles.campos}>
                    <label>URL Cartaz</label>
                    <input></input>
                    <label>Nome</label>
                    <input></input>
                    <label>Descrição</label>
                    <textarea oninput="autoResize(this)" className={styles.textAreaDescricao}></textarea>
                    <label>Faixa Etária</label>
                    <input type='number'></input>
                    <label>Diretor(a)</label>
                    <input></input>
                    <section>
                        <section className={styles.add}>
                            <label>Escritor(a)</label>
                            <button>+</button>
                        </section>
                        <input></input> 
                        <section className={styles.addInput}>
                            <input></input> 
                            <button>EXCLUIR</button>
                        </section>                     
                    </section>
                    <section>
                        <section className={styles.add}>
                            <label>Ator(a)</label>
                            <button>+</button>
                        </section>
                        <input></input> 
                        <section className={styles.addInput}>
                            <input></input> 
                            <button>EXCLUIR</button> 
                        </section>                     
                    </section>
                    <section>
                        <section className={styles.add}>
                            <label>Gênero</label>
                            <button>+</button>
                        </section>
                        <input></input> 
                        <section className={styles.addInput}>
                            <input></input>  
                            <button>EXCLUIR</button>
                        </section>                     
                    </section>
                    <label>Data de Lançamento</label>
                    <input className={styles.inputData} type='date'></input>
                </section>
                <button className={styles.buttonSubmite}>CRIAR</button>
            </form>
        </div>
    )
}
