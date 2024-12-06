import styles from './createMovieSession.module.css'
import { useEffect, useState } from 'react'

export function CreateMovieSession (){

    const [selectedMovie, setSelectedMovie] = useState(null);

    const filmeEx = {
        id: 2,
        titulo: 'Oppenheimer',
        genero: 'Biografia',
        diretor: 'Christopher Nolan',
        escritores: 'Christopher Nolan',
        estrelas: 'Cillian Murphy, Emily Blunt',
        disponibilidade: true,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/5bbfOrn5Stku1HxlkK4ISYi2uQk=/206x305/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=',
        descricao: 'A vida de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan e desenvolveu a primeira bomba atômica.',
    };

    const filmes = [
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
            idadeMin: 12,
            poster: 'https://resizing.flixster.com/J4xdPjUuyUwx3WCQiA9feOp4_-4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v12_ah.jpg',
            descricao: 'A boneca Barbie embarca em uma aventura no mundo real, confrontando questões de identidade e propósito.',
        },
        {
            id: 2,
            titulo: 'Oppenheimer',
            genero: 'Biografia',
            diretor: 'Christopher Nolan',
            escritores: 'Christopher Nolan',
            estrelas: 'Cillian Murphy, Emily Blunt',
            disponibilidade: true,
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            idadeMin: 14,
            poster: 'https://resizing.flixster.com/5bbfOrn5Stku1HxlkK4ISYi2uQk=/206x305/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=',
            descricao: 'A vida de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan e desenvolveu a primeira bomba atômica.',
        },
        {
            id: 3,
            titulo: 'Guardians of the Galaxy Vol. 3',
            genero: 'Ação',
            diretor: 'James Gunn',
            escritores: 'James Gunn',
            estrelas: 'Chris Pratt, Zoe Saldana',
            disponibilidade: true,
            cidade: 'Fortaleza',
            estado: 'CE',
            idadeMin: 12,
            poster: 'https://resizing.flixster.com/7BvHbqYVikal2I8DAX-HnNSdrdU=/206x305/v2/https://resizing.flixster.com/p8g-u3ZgPuxrg4x7aq1tidyffGg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZDg0OTc0LWVkMTktNDVhYS05ODljLTNkMjYxMjA0OTdjMy5qcGc=',
            descricao: 'Os Guardiões da Galáxia enfrentam novos desafios enquanto tentam proteger o universo e lidar com seu passado.',
        },
        {
            id: 4,
            titulo: 'Duna',
            genero: 'Ficção Científica',
            diretor: 'Denis Villeneuve',
            escritores: 'Jon Spaihts, Denis Villeneuve, Eric Roth',
            estrelas: 'Timothée Chalamet, Rebecca Ferguson',
            disponibilidade: true,
            cidade: 'Brasília',
            estado: 'DF',
            idadeMin: 14,
            poster: 'https://resizing.flixster.com/QwO-nRLkBjU8-BlAz7xHdvUvalE=/206x305/v2/https://resizing.flixster.com/PgHhmCKS3hR6GUsVNlC-vZ9d90I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOTA0OTIzLTEwNDctNDhkNS1iNTc3LTY3MjBmNDc5OGU1Mi5qcGc=',
            descricao: 'Paul Atreides, um jovem nobre, deve viajar para o planeta desértico de Arrakis para proteger o recurso mais valioso e vital do universo.',
        }, {
            id: 5,
            titulo: 'The Flash',
            genero: 'Ação',
            diretor: 'Andy Muschietti',
            escritores: 'Christina Hodson',
            estrelas: 'Ezra Miller, Michael Keaton',
            disponibilidade: false,  
            datalancamento: '13 Junho 2025 (UK)',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            idadeMin: 12,
            poster: 'https://resizing.flixster.com/DdaIpLQLWNZSeGiSkrBunoNHGwA=/206x305/v2/https://resizing.flixster.com/F8JH95OjUwzlqREEWnwBXd1Mrf8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJkZjg3MjI1LWU1YzgtNDZiMy05ZDY3LWFlNTMyOWVhZmRjMi5qcGc=',
            descricao: 'Barry Allen usa seus superpoderes para viajar no tempo e alterar eventos do passado, mas sua tentativa de salvar sua família acaba desencadeando consequências imprevistas.',
        }
    ];

    function handleSelectButtonClick( selectedMovie1 ) {
        setSelectedMovie (selectedMovie1);
    };

    

    const disponibilidadeFunction = (disponibilidade, datalancamento) => {
        if (disponibilidade === false) {
            return <p className={styles.movie_lancamento_false}>Lançamento: <span>{datalancamento}</span></p>;
        } else {
            return <p className={styles.movie_lancamento_true}>Disponível</p>;
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

    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value);
        setCidadeSelecionada('');
        setCurrentPage(1);
    };

    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    const handleCidadeChange = (event) => {
        setCidadeSelecionada(event.target.value);
        setCurrentPage(1);
    };

    const [estados, setEstados] = useState([]);

    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        const estadosFiltrados = [...new Set(filmes.map(filme => filme.estado))];
        setEstados(estadosFiltrados);
    }, []);
    
    useEffect(() => {
        if (estadoSelecionado) {
          const cidadesFiltradas = [...new Set(filmes.filter(filme => filme.estado === estadoSelecionado).map(filme => filme.cidade))];
          setCidades(cidadesFiltradas);
        } else {
          setCidades([]);
        }
    }, [estadoSelecionado]); 


    return (
        <div className={styles.createMovieSession}>
                { selectedMovie != null ? (
                    <form className={styles.searchMovie}>
                        <section className={styles.movie_selection_name}>
                                <input id="titulo" placeholder='Digite o nome do Filme'></input>
                                <button><img src='src/assets/search_icon.svg'/></button>
                        </section>
                        <section className={styles.movieList}>
                            {filmes.map(filme => (
                                <button key={filme.id} className={styles.movie_card_list} onClick={() => handleSelectButtonClick(filme.id)}>            
                                    <img src={filme.poster} alt="Capa do Filme"></img>
                                    <section className={styles.movie_card_list_informations}>
                                        <div className={styles.movie_card_list_top}>
                                            <h4>{filme.titulo}</h4>
                                            {disponibilidadeFunction(filme.disponibilidade,filme.datalancamento)}
                                        </div>
                                        <div className={styles.movie_card_list_bottom}>
                                            <p>{filme.descricao}</p>
                                        </div>
                                    </section>
                                </button>
                            ))}
                        </section>
                    </form>
                ) : (
                    <section className={styles.setInformations}>
                        <form className={styles.movie_selection}>
                            <div>
                                <select id="estado" value={estadoSelecionado} onChange={handleEstadoChange}>
                                    <option value="">Estado</option>
                                    {estados.map(estado => (
                                        <option key={estado} value={estado}>{estado}</option>
                                    ))}
                                </select>
                            </div>
                            {estadoSelecionado && (
                                <div>
                                    <select id="cidade" value={cidadeSelecionada} onChange={handleCidadeChange}>
                                    <option value="">Cidade</option>
                                    {cidades.map(cidade => (
                                        <option key={cidade} value={cidade}>{cidade}</option>
                                    ))}
                                    </select>
                                </div>
                            )}
                        </form>
                        <section>
                            <button key={filmeEx.id} className={styles.movie_card} onClick={() => handleSelectButtonClick(filmeEx.id)}>                   
                                <img src={filmeEx.poster} alt="Capa do Filme"></img>
                                <div>
                                    <h4>{filmeEx.titulo}</h4>
                                    <div>
                                        <div className={styles.movie_genero}>
                                            <p>{filmeEx.genero}</p>
                                        </div>
                                        {idadeMinFunction(filmeEx.idadeMin)}
                                    </div>                        
                                    <div className={styles.movie_inf}>
                                        <p>Director: <span>{filmeEx.diretor}</span></p>
                                        <p>Writers: <span>{filmeEx.escritores}</span></p>
                                        <p>Stars: <span>{filmeEx.estrelas}</span></p>
                                    </div>
                                    {disponibilidadeFunction(filmeEx.disponibilidade,filmeEx.datalancamento)}
                                </div>
                            </button>
                        </section> 
                    </section>
                )             
                }
        </div>
    )
}
