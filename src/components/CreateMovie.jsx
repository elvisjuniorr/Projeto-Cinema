import styles from './createMovie.module.css'

export function CreateMovie (){
    
    return (
        <div className={styles.createMovie}>
            <form className={styles.formulario}>
                <img className={styles.imgCreateMovie} src="https://resizing.flixster.com/5bbfOrn5Stku1HxlkK4ISYi2uQk=/206x305/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc="/>
                <section className={styles.campos}>
                    <label>URL Cartaz</label>
                    <input></input>
                    <label>Nome</label>
                    <input></input>
                    <label>Descrição</label>
                    <input></input>
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
            </form>
        </div>
    )
}
