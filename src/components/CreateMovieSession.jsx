import styles from './createMovieSession.module.css'

export function CreateMovieSession (){

    const filme = 
        {
            id: 1,
            titulo: 'Barbie',
            genero: 'Fantasia',
            diretor: 'Greta Gerwig',
            escritores: 'Greta Gerwig, Noah Baumbach',
            estrelas: 'Margot Robbie, Ryan Gosling',
            disponibilidade: true,
            cidade: 'São Paulo',
            estado: 'SP',
            bairro: 'Vila Mariana',
            unidade: 'Cine Belas Artes',
            idadeMin: 12,
            poster: 'https://resizing.flixster.com/J4xdPjUuyUwx3WCQiA9feOp4_-4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v12_ah.jpg',
            descricao: 'A boneca Barbie embarca em uma aventura no mundo real, confrontando questões de identidade e propósito.',
        };

    const disponibilidadeFunction = (disponibilidade, datalancamento) => {
        if (disponibilidade === false) {
            return <p className={styles.movie_lancamento_false}>Data de lançamento: <span>{datalancamento}</span></p>;
        } else {
            return <p className={styles.movie_lancamento_true}>Disponível: <span>CONFERIR HORÁRIOS</span></p>;
        }
    };

    const idadeMinFunction = (idadeMin) => {
        if (idadeMin == 6) {
            return <p style={{backgroundColor: 'green'}}>{idadeMin}</p>;
        } else if (idadeMin == 10) {
            return <p style={{backgroundColor: 'blue'}}>{idadeMin}</p>;
        } else if (idadeMin == 12) {
            return <p style={{backgroundColor: 'yellow'}}>{idadeMin}</p>;
        } else if (idadeMin == 14) {
            return <p style={{backgroundColor: 'orange'}}>{idadeMin}</p>;
        } else if (idadeMin === 16) {
            return <p style={{backgroundColor: 'red'}}>{idadeMin}</p>;
        } else {
            return <p style={{backgroundColor: 'black'}}>{idadeMin}</p>;
        } 
    };

    return (
        <div className={styles.createMovieSession}>
                <section>
                    <button key={filme.id} className={styles.movie_card} onClick={() => handleSelectButtonClick(filme.id)}>                   
                        <img src={filme.poster} alt="Capa do Filme"></img>
                        <div>
                            <h4>{filme.titulo}</h4>
                            <div>
                                <div className={styles.movie_genero}>
                                    <p>{filme.genero}</p>
                                </div>
                                {idadeMinFunction(filme.idadeMin)}
                            </div>                        
                            <div className={styles.movie_inf}>
                                <p>Director: <span>{filme.diretor}</span></p>
                                <p>Writers: <span>{filme.escritores}</span></p>
                                <p>Stars: <span>{filme.estrelas}</span></p>
                            </div>
                            {disponibilidadeFunction(filme.disponibilidade,filme.datalancamento)}
                            <img src='src/assets/arrow_icon.svg' alt="Ícone de seta"/>
                        </div>
                    </button>
                </section>
        </div>
    )
}
