import { useState } from 'react'
import styles from './movieSession.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

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
        bairro: 'Vila Mariana',
        unidade: 'Cine Belas Artes',
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
        bairro: 'Botafogo',
        unidade: 'Cine Odeon',
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
        bairro: 'Aldeota',
        unidade: 'Cine Dragão',
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
        bairro: 'Asa Sul',
        unidade: 'Cine Brasília',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/QwO-nRLkBjU8-BlAz7xHdvUvalE=/206x305/v2/https://resizing.flixster.com/PgHhmCKS3hR6GUsVNlC-vZ9d90I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOTA0OTIzLTEwNDctNDhkNS1iNTc3LTY3MjBmNDc5OGU1Mi5qcGc=',
        descricao: 'Paul Atreides, um jovem nobre, deve viajar para o planeta desértico de Arrakis para proteger o recurso mais valioso e vital do universo.',
    },
    {
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
        bairro: 'Barra da Tijuca',
        unidade: 'Cine New York',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/DdaIpLQLWNZSeGiSkrBunoNHGwA=/206x305/v2/https://resizing.flixster.com/F8JH95OjUwzlqREEWnwBXd1Mrf8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJkZjg3MjI1LWU1YzgtNDZiMy05ZDY3LWFlNTMyOWVhZmRjMi5qcGc=',
        descricao: 'Barry Allen usa seus superpoderes para viajar no tempo e alterar eventos do passado, mas sua tentativa de salvar sua família acaba desencadeando consequências imprevistas.',
    },
    {
        id: 6,
        titulo: 'Killers of the Flower Moon',
        genero: 'Drama',
        diretor: 'Martin Scorsese',
        escritores: 'Eric Roth, Martin Scorsese',
        estrelas: 'Leonardo DiCaprio, Robert De Niro',
        disponibilidade: true,
        cidade: 'Salvador',
        estado: 'BA',
        bairro: 'Campo Grande',
        unidade: 'Cine Glauber Rocha',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/Nkywr3qkAo-G089ObPt_kqxPCkE=/206x305/v2/https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc=',
        descricao: 'Nos anos 1920, uma série de assassinatos ocorre na nação Osage, rica em petróleo, levando uma investigação do FBI.',
    },
    {
        id: 7,
        titulo: 'Spider-Man: Across the Spider-Verse',
        genero: 'Animação',
        diretor: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
        escritores: 'Phil Lord, Christopher Miller, David Callaham',
        estrelas: 'Shameik Moore, Hailee Steinfeld',
        disponibilidade: true,
        cidade: 'Porto Alegre',
        estado: 'RS',
        bairro: 'Moinhos de Vento',
        unidade: 'Cine Capitólio',
        idadeMin: 10,
        poster: 'https://resizing.flixster.com/Kcw4PRHpIZSeBjo0FbhVwxQ7vdA=/206x305/v2/https://resizing.flixster.com/abVYM20-_8hBgvl4VJTC_28L0Tw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTQxM2E4LTUzYmYtNGI3MS1iM2FmLWJjYTFmOWZjMDYzNS5qcGc=',
        descricao: 'Miles Morales retorna para a nova aventura do Aranhaverso, enfrentando novos vilões e fazendo novos aliados em diferentes dimensões.',
    },
    {
        id: 8,
        titulo: 'O Menu',
        genero: 'Terror',
        diretor: 'Mark Mylod',
        escritores: 'Seth Reiss, Will Tracy',
        estrelas: 'Anya Taylor-Joy, Ralph Fiennes',
        disponibilidade: false,
        datalancamento: '20 Janeiro 2025 (UK)',
        cidade: 'Curitiba',
        estado: 'PR',
        bairro: 'Batel',
        unidade: 'Cine Guarani',
        idadeMin: 16,
        poster: 'https://resizing.flixster.com/bk7arlNK0P8fNnd3qqa9vXgdnx4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20548998_p_v10_ab.jpg',
        descricao: 'Um jovem casal viaja para uma ilha remota para comer em um restaurante exclusivo onde o chef preparou um menu luxuoso, com algumas surpresas chocantes.',
    },
    {
        id: 9,
        titulo: 'The Batman',
        genero: 'Ação',
        diretor: 'Matt Reeves',
        escritores: 'Matt Reeves, Peter Craig',
        estrelas: 'Robert Pattinson, Zoë Kravitz',
        disponibilidade: true,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        bairro: 'Savassi',
        unidade: 'Cine 104',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/HKLUx0Wo0o6vDbSB5pGpp4D4sB4=/206x305/v2/https://resizing.flixster.com/l32NodNrRXp5LJYJXfO7i_aI-ug=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdkZDBkMWY4LTE1OWYtNDM3OS04ZDRlLTI5ZjM2ZTc4M2ExYy5qcGc=',
        descricao: 'O jovem Bruce Wayne descobre que a corrupção em Gotham City está ligada à sua própria família enquanto enfrenta o assassino serial conhecido como Charada.',
    },
    {
        id: 10,
        titulo: 'O Exorcista do Papa',
        genero: 'Terror',
        diretor: 'Julius Avery',
        escritores: 'Michael Petroni, Evan Spiliotopoulos',
        estrelas: 'Russell Crowe, Daniel Zovatto',
        disponibilidade: true,
        cidade: 'Recife',
        estado: 'PE',
        bairro: 'Boa Viagem',
        unidade: 'Cine São Luiz',
        idadeMin: 16,
        poster: 'https://resizing.flixster.com/3ZY4F0hbUigKO0huX4CnNFJmfGA=/206x305/v2/https://resizing.flixster.com/B-RswE0nOOCtItmoHHZ5la_KQm8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAxZTM5MTg0LTQ3OWItNDg5Yi1iN2Y1LWRmODFjOWYyZjE2ZC5qcGc=',
        descricao: 'O Padre Gabriele Amorth, exorcista-chefe do Vaticano, investiga uma possessão aterrorizante em um jovem garoto e acaba descobrindo uma conspiração secular que o próprio Vaticano tentou esconder.',
    },
    {
        id: 11,
        titulo: 'Top Gun: Maverick',
        genero: 'Ação',
        diretor: 'Joseph Kosinski',
        escritores: 'Ehren Kruger, Eric Warren Singer, Christopher McQuarrie',
        estrelas: 'Tom Cruise, Jennifer Connelly',
        disponibilidade: false,
        datalancamento: '20 Dezembro 2024 (UK)',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Vila Mariana',
        unidade: 'Cineplex 1',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/UuyjwlbRE17UP6ot-ehuA_UXdrw=/206x305/v2/https://resizing.flixster.com/TIM4kfHTVZrfpF0tYt9LIU69A5s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1OWIwMWQwLWYyZDItNDk4Yi04MDIxLWI3OTJlNDI1NjA3NS5qcGc=',
        descricao: 'Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete "Maverick" Mitchell continua a desafiar limites como um piloto de testes corajoso.',
    },
    {
        id: 12,
        titulo: 'Minions: The Rise of Gru',
        genero: 'Animação',
        diretor: 'Kyle Balda, Brad Ableson, Jonathan del Val',
        escritores: 'Matthew Fogel, Brian Lynch',
        estrelas: 'Steve Carell, Pierre Coffin',
        disponibilidade: true,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        bairro: 'Copacabana',
        unidade: 'Cineplex 2',
        idadeMin: 6,
        poster: 'https://resizing.flixster.com/5M85GItiHLI3ZvsJjlXAOWAlzMs=/206x305/v2/https://resizing.flixster.com/s2eQM6eCyFOAYE_jOckLuj7op84=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBkOGQzNDU5LWQ0YjgtNDczNi1hNmE1LWI1ZWFjY2QxZTNlYS5qcGc=',
        descricao: 'A história de como Gru se tornou o maior supervilão do mundo e encontrou seus adoráveis Minions.',
    },
    {
        id: 13,
        titulo: 'Asteroid City',
        genero: 'Comédia',
        diretor: 'Wes Anderson',
        escritores: 'Wes Anderson, Roman Coppola',
        estrelas: 'Jason Schwartzman, Scarlett Johansson',
        disponibilidade: true,
        cidade: 'Fortaleza',
        estado: 'CE',
        bairro: 'Meireles',
        unidade: 'Cineplex 3',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/KjABCQrEjUoHp54lyoBK3Y7R8IA=/206x305/v2/https://resizing.flixster.com/N1dnUvL2FS7F9x090K-NlJXr-p4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMyNzc2ODYwLTJlMjYtNDgzNi05MmIwLWNiOTgzYzA4YjU0MC5qcGc=',
        descricao: 'Asteroid City se passa em uma cidade fictícia do deserto americano por volta de 1955, onde um evento de mudança de vida acontece.',
    },
    {
        id: 14,
        titulo: 'The Marvels',
        genero: 'Ação',
        diretor: 'Nia DaCosta',
        escritores: 'Megan McDonnell, Nia DaCosta, Elissa Karasik',
        estrelas: 'Brie Larson, Teyonah Parris',
        disponibilidade: true,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        bairro: 'Savassi',
        unidade: 'Cineplex 4',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/t9xW3hzc3NC_2ICHlzvLe7kvASc=/206x305/v2/https://resizing.flixster.com/Ht14zArBc90eTF1dMAaQynKk2Ic=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NhNjNhOGQ1LWE5Y2YtNDFlZS1iNDk0LWQyZGMyZTlhYmVmOS5qcGc=',
        descricao: 'As aventuras de Carol Danvers, também conhecida como Capitã Marvel, enquanto ela enfrenta novos desafios com aliados inesperados.',
    },
    {
        id: 15,
        titulo: 'The Batman',
        genero: 'Ação',
        diretor: 'Matt Reeves',
        escritores: 'Matt Reeves, Peter Craig',
        estrelas: 'Robert Pattinson, Zoë Kravitz',
        disponibilidade: false,  
        datalancamento: '02 Julho 2025 (UK)',
        cidade: 'Curitiba',
        estado: 'PR',
        bairro: 'Centro',
        unidade: 'Cineplex 5',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/YDdRgWm1dsAAffl-U99wOf9v6fQ=/206x305/v2/https://resizing.flixster.com/HUwAlW1QAya1vlIePUDv3kdzhIE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc1OGFlMDI0LTE1ZTEtNDE4ZS04Y2RmLWNjYzcyOWQyZmMyNi5qcGc=',
        descricao: 'Em seu segundo ano de combate ao crime, Batman investiga a corrupção de Gotham City e a conexão com sua própria família.',
    },
    {
        id: 16,
        titulo: 'The Whale',
        genero: 'Drama',
        diretor: 'Darren Aronofsky',
        escritores: 'Samuel D. Hunter',
        estrelas: 'Brendan Fraser, Sadie Sink',
        disponibilidade: true,
        cidade: 'Porto Alegre',
        estado: 'RS',
        bairro: 'Moinhos de Vento',
        unidade: 'Cineplex 6',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/5zRnkJVAxhh9JengGEK8T7zoXlA=/206x305/v2/https://resizing.flixster.com/k4O2dPmx9brEPScWUiuFiayMHpo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3ODEzY2Q4LTc4YWEtNDQ0OC1hNGQ0LTU0NGQzZWJjMzNhMy5qcGc=',
        descricao: 'Um recluso professor de inglês que vive com obesidade severa tenta se reconectar com sua filha adolescente para uma última chance de redenção.',
    },
    {
        id: 17,
        titulo: 'Nope',
        genero: 'Ficção Científica',
        diretor: 'Jordan Peele',
        escritores: 'Jordan Peele',
        estrelas: 'Daniel Kaluuya, Keke Palmer',
        disponibilidade: true,
        cidade: 'Recife',
        estado: 'PE',
        bairro: 'Boa Viagem',
        unidade: 'Cineplex 7',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/OmQmyt9EGYYw0qnWUnUFwR8dGkE=/206x305/v2/https://resizing.flixster.com/6EeYrywKueOFue9uRSQqLxfGKI0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA0NzZhZTk0LTI3NjctNGZiNi04Yjg4LWRiN2RkNTJiYWZlNy5qcGc=',
        descricao: 'Os moradores de uma cidade isolada testemunham uma descoberta bizarra e aterrorizante que desafia a lógica e as leis da física.',
    },
    {
        id: 18,
        titulo: 'Past Lives',
        genero: 'Drama',
        diretor: 'Celine Song',
        escritores: 'Celine Song',
        estrelas: 'Greta Lee, Teo Yoo',
        disponibilidade: true,
        cidade: 'Florianópolis',
        estado: 'SC',
        bairro: 'Centro',
        unidade: 'Cineplex 8',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/ip4filts4cV72q1fIzvmugV-Hrg=/206x305/v2/https://resizing.flixster.com/Rj36W7XfjR7FUlGiJBCMNfLpk5k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg5NjQ4NjQxLTI5MzktNDVlMy04NTU0LTEzZGJiYTZmNzRlNi5qcGc=',
        descricao: 'Dois amigos de infância são separados após uma família emigrar da Coreia do Sul. Vinte anos depois, eles se reencontram e confrontam o destino e as escolhas da vida.',
    },
    {
        id: 19,
        titulo: 'Mission: Impossible – Dead Reckoning Part One',
        genero: 'Ação',
        diretor: 'Christopher McQuarrie',
        escritores: 'Christopher McQuarrie, Erik Jendresen',
        estrelas: 'Tom Cruise, Hayley Atwell',
        disponibilidade: true,
        cidade: 'Salvador',
        estado: 'BA',
        bairro: 'Barra',
        unidade: 'Cineplex 1',
        idadeMin: 14,
        poster: 'https://midias.jb.com.br/_midias/jpg/2023/07/14/missao_impossivel-756233.jpg',
        descricao: 'Ethan Hunt e sua equipe IMF enfrentam sua missão mais perigosa, caçando uma nova arma aterrorizante antes que caia nas mãos erradas.',
    },
    {
        id: 20,
        titulo: 'Joker',
        genero: 'Drama',
        diretor: 'Todd Phillips',
        escritores: 'Todd Phillips, Scott Silver',
        estrelas: 'Joaquin Phoenix, Robert De Niro',
        disponibilidade: true,
        cidade: 'Manaus',
        estado: 'AM',
        bairro: 'Centro',
        unidade: 'Cineplex 2',
        idadeMin: 16,
        poster: 'https://resizing.flixster.com/7LzRuGZhwS6PvLzsOvwyVIl71yw=/206x305/v2/https://resizing.flixster.com/YrgoDA1swmWoj7JbfGNWsJ1Y4vc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIzNjM3NmRhLWZiOWUtNGFjNC1hMTViLTM1ZWEzNWRkMzI1Zi53ZWJw',
        descricao: 'Em 1981, um comediante fracassado enlouquece e se transforma em um assassino psicopata, inspirando uma onda de crimes em Gotham City.',
    },
    {
        id: 21,
        titulo: 'Uncharted',
        genero: 'Ação',
        diretor: 'Ruben Fleischer',
        escritores: 'Rafe Judkins, Art Marcum, Matt Holloway',
        estrelas: 'Tom Holland, Mark Wahlberg, Antonio Banderas',
        disponibilidade: true,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        bairro: 'Botafogo',
        unidade: 'Cineplex 3',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/67QFiHz4pD23vTsQ-FXn_F8vRTU=/206x305/v2/https://resizing.flixster.com/Vu0aZW3KXbHGf7icIpKBNYdUExg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NlYzZhYTRkLTBlNWMtNDBiZC05N2JhLTdjMWE2ODdiNDNiZS5qcGc=',
        descricao: 'Nathan Drake e seu mentor Sully embarcam em uma jornada perigosa em busca de um tesouro perdido há muito tempo.'
    },
    {
        id: 22,
        titulo: 'The Northman',
        genero: 'Ação',
        diretor: 'Robert Eggers',
        escritores: 'Sjón, Robert Eggers',
        estrelas: 'Alexander Skarsgård, Nicole Kidman, Claes Bang',
        disponibilidade: true,
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Paulista',
        unidade: 'Cineplex 4',
        idadeMin: 18,
        poster: 'https://resizing.flixster.com/U19LSOllB-7syblcnxEql7oWqJI=/206x305/v2/https://resizing.flixster.com/xqdmTbHQwYWwsybacb-L96GdF1M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNhNmY3YTRmLTMzNTMtNDAxOS04ZGEwLWMyNzRmNmI4Y2NlOC5qcGc=',
        descricao: 'Um jovem príncipe viking busca vingança pelo assassinato de seu pai.'
    },
    {
        id: 23,
        titulo: 'Black Panther: Wakanda Forever',
        genero: 'Ação',
        diretor: 'Ryan Coogler',
        escritores: 'Ryan Coogler, Joe Robert Cole',
        estrelas: 'Letitia Wright, Lupita Nyong\'o, Danai Gurira',
        disponibilidade: false,
        datalancamento: '09 Setembro 2025 (UK)',
        cidade: 'Salvador',
        estado: 'BA',
        bairro: 'Campo Grande',
        unidade: 'Cineplex 5',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/99LrDMoB1XYddzApwfJtD7RBmP0=/206x305/v2/https://resizing.flixster.com/QJkeIM6LIvwmRGiLKrNBcpZIk8M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAwYzExZjlmLWJlODQtNDY4Mi1iNDhkLWU2YWNmMGIyMDgwMi5qcGc=',
        descricao: 'A nação de Wakanda luta para proteger seu legado após a morte do Rei T\'Challa.'
    },
    {
        id: 24,
        titulo: 'Aquaman and the Lost Kingdom',
        genero: 'Ação',
        diretor: 'James Wan',
        escritores: 'David Leslie Johnson-McGoldrick',
        estrelas: 'Jason Momoa, Amber Heard, Patrick Wilson',
        disponibilidade: true,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        bairro: 'Savassi',
        unidade: 'Cineplex 6',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/9aFEFln3zbDjVZal2qfvbHwBax8=/206x305/v2/https://resizing.flixster.com/ioQtD3b6hKJON0J4_7S-Wp0Ss5M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczNzQ3NjczLTE3MWMtNGJlYi1hODUwLTNkMmU5MGYxYjJiNy5qcGc=',
        descricao: 'Aquaman deve forjar uma aliança desconfortável com um aliado improvável para salvar Atlântida e o mundo da destruição irreversível.'
    },
    {
        id: 25,
        titulo: 'Avatar: The Way of Water',
        genero: 'Ficção Científica',
        diretor: 'James Cameron',
        escritores: 'James Cameron, Josh Friedman',
        estrelas: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        disponibilidade: false,
        datalancamento: '10 Março 2025 (UK)',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        bairro: 'Leblon',
        unidade: 'Cineplex 7',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/CLzU0r6KbnIVqeXulxxE_0MbuZc=/206x305/v2/https://resizing.flixster.com/gWWM2Ov0VLAuazwELZCVc9grUQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyMGM0ZDJiLWNmYjAtNGI3NS1hYTgzLTQ5YmU2ZjQwZWE0ZC5qcGc=',
        descricao: 'Jake Sully vive com sua nova família formada no planeta Pandora. Quando uma ameaça familiar retorna para terminar o que começou, Jake deve trabalhar com Neytiri e o exército da raça Na\'vi para proteger seu planeta.'
    },
    {
        id: 26,
        titulo: 'Scream VI',
        genero: 'Terror',
        diretor: 'Matt Bettinelli-Olpin, Tyler Gillett',
        escritores: 'James Vanderbilt, Guy Busick',
        estrelas: 'Melissa Barrera, Jenna Ortega, Courteney Cox',
        disponibilidade: true,
        cidade: 'Fortaleza',
        estado: 'CE',
        bairro: 'Aldeota',
        unidade: 'Cineplex 8',
        idadeMin: 18,
        poster: 'https://resizing.flixster.com/VOOlIuJ7WM_D9BYra1sFfpwbBr4=/206x305/v2/https://resizing.flixster.com/dbokT9ziX9XrMs2Ims1OnyLJYmI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk3ZmU4OTRlLWM5YTAtNDU3Ni04ODNiLWUxZDE1ZmY1MWQ3Yi5qcGc=',
        descricao: 'Os sobreviventes dos assassinatos de Ghostface deixam Woodsboro para trás e começam um novo capítulo em Nova York.'
    },
    {
        id: 27,
        titulo: 'The Little Mermaid',
        genero: 'Fantasia',
        diretor: 'Rob Marshall',
        escritores: 'David Magee',
        estrelas: 'Halle Bailey, Jonah Hauer-King, Melissa McCarthy',
        disponibilidade: true,
        cidade: 'Recife',
        estado: 'PE',
        bairro: 'Boa Viagem',
        unidade: 'Cineplex 9',
        idadeMin: 10,
        poster: 'https://resizing.flixster.com/o_hIZ_YXQVEJbEFNbPpiUC8xKh4=/206x305/v2/https://resizing.flixster.com/3G1MxvtcSPmHhK3sN7x8Njc9g_0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM5NmFhOGQ5LTE4MDQtNDY1OS05ODYzLWEzZTlkY2ZiM2IwNS5qcGc=',
        descricao: 'Uma jovem sereia faz um pacto com uma bruxa do mar para trocar sua bela voz por pernas humanas para que ela possa descobrir o mundo acima da água e impressionar um príncipe.'
    },
    {
        id: 28,
        titulo: 'Inception',
        genero: 'Ação',
        diretor: 'Christopher Nolan',
        escritores: 'Christopher Nolan',
        estrelas: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
        disponibilidade: true,
        cidade: 'Curitiba',
        estado: 'PR',
        bairro: 'Centro',
        unidade: 'Cineplex 10',
        idadeMin: 14,
        poster: 'https://resizing.flixster.com/RxGReKiNeLRDhz_1DDe-JiurSSY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg',
        descricao: 'Um ladrão que invade os sonhos das pessoas para roubar seus segredos precisa realizar um último trabalho: plantar uma ideia na mente de um alvo.'
    },
    {
        id: 29,
        titulo: 'Interstellar',
        genero: 'Ficção Científica',
        diretor: 'Christopher Nolan',
        escritores: 'Jonathan Nolan, Christopher Nolan',
        estrelas: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        disponibilidade: false,
        datalancamento: '28 Abril 2025 (UK)',
        cidade: 'Porto Alegre',
        estado: 'RS',
        bairro: 'Cidade Baixa',
        unidade: 'Cineplex 11',
        idadeMin: 12,
        poster: 'https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
        descricao: 'Um grupo de exploradores deve viajar além da nossa galáxia para descobrir se a humanidade tem um futuro entre as estrelas.'
    },
    {
        id: 30,
        titulo: 'The Matrix',
        genero: 'Ficção Científica',
        diretor: 'Lana Wachowski, Lilly Wachowski',
        escritores: 'Lana Wachowski, Lilly Wachowski',
        estrelas: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        disponibilidade: true,
        cidade: 'Brasília',
        estado: 'DF',
        bairro: 'Asa Norte',
        unidade: 'Cineplex 12',
        idadeMin: 16,
        poster: 'https://resizing.flixster.com/w39hy3UJt20HbDyxOgj7c_4PvMw=/206x305/v2/https://resizing.flixster.com/azk7WCNkOsS1Yb2QOZ6nYBMaVZs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q4ZWE4ZTUwLTI5MTMtNDQ5Yi05M2Y5LTVlNWVlNjU5YWRmZC5qcGc=',
        descricao: 'Um hacker descobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.'
    }
];

export function MovieSession (){

    const [selectedRooms, setSelectedRooms] = useState([true, true, true]);

    const [bairroSelecionado, setBairroSelecionado] = useState('');

    const handleBairroChange = (event) => {
        setBairroSelecionado(event.target.value);
        setCurrentPage(1);
    };

    const [unidadeSelecionada, setUnidadeSelecionada] = useState('');

    const handleUnidadeChange = (event) => {
        setUnidadeSelecionada(event.target.value);
        setCurrentPage(1);
    };

    const sessoesFiltradas = filmes.filter(filme => 
        (!bairroSelecionado || filme.bairro === bairroSelecionado) &&
        (!unidadeSelecionada || filme.unidade === unidadeSelecionada)
    );



    const toggleRoomSelection = (room) => {
        if (room === '2D'){
            if (selectedRooms[0] === true && selectedRooms[1] === true && selectedRooms[2] === true){
                setSelectedRooms ([true, false, false]);
            } else if (selectedRooms[0] === true && selectedRooms[1] === false && selectedRooms[2] === false){
                setSelectedRooms ([true, true, true]);
            } else {
                setSelectedRooms ([true, false, false]);
            };  
        } else if (room === '3D'){
            if (selectedRooms[0] === true && selectedRooms[1] === true && selectedRooms[2] === true){
                setSelectedRooms ([false, true, false]);
            } else if (selectedRooms[0] === false && selectedRooms[1] === true && selectedRooms[2] === false){
                setSelectedRooms ([true, true, true]);
            } else {
                setSelectedRooms ([false, true, false]);
            };  
        } else{
            if (selectedRooms[0] === true && selectedRooms[1] === true && selectedRooms[2] === true){
                setSelectedRooms ([false, false, true]);
            } else if (selectedRooms[0] === false && selectedRooms[1] === false && selectedRooms[2] === true){
                setSelectedRooms ([true, true, true]);
            }  else {
                setSelectedRooms ([false, false, true]);
            };  
        }
    };

    const idadeMinFunction = (idadeMin) => {
        if (idadeMin == 6) {
            return <p style={{backgroundColor: 'green'}} className={styles.idadeMin}>{idadeMin}</p>;
        } else if (idadeMin == 10) {
            return <p style={{backgroundColor: 'blue'}} className={styles.idadeMin}>{idadeMin}</p>;
        } else if (idadeMin == 12) {
            return <p style={{backgroundColor: 'yellow'}} className={styles.idadeMin}>{idadeMin}</p>;
        } else if (idadeMin == 14) {
            return <p style={{backgroundColor: 'orange'}} className={styles.idadeMin}>{idadeMin}</p>;
        } else if (idadeMin === 16) {
            return <p style={{backgroundColor: 'red'}} className={styles.idadeMin}>{idadeMin}</p>;
        } else {
            return <p style={{backgroundColor: 'black'}} className={styles.idadeMin}>{idadeMin}</p>;
        } 
    };

    // const { idMovie } = useParams();

    // const filme = filmes.find((filme) => filme.id === parseInt(idMovie));

    // if (!filme) {
    //     return <div>Filme não encontrado</div>;
    // }

    const location = useLocation();

    const filme = filmes.find((filme) => filme.id === parseInt(location.state.idMovie));

    const navigate = useNavigate();

    const handleButtonTimeClick = (idTime) => {
        navigate('/Checkout', { state: { idMovie: location.state.idMovie, idTime: idTime} });
    }

    return (
        <div className={styles.mostrar_sessoes}>
            <div className={styles.banner}>
                <div>
                    <img src={filme.poster}/>
                    <div>
                        <div>
                            <div>
                                <p>{filme.titulo}</p>
                                {idadeMinFunction(filme.idadeMin)}
                            </div>
                            <p>{filme.genero}</p>
                            <p>{filme.descricao}</p>
                        </div>
                        <div>
                            {/* <div>
                                <select id="bairro" value={bairroSelecionado} onChange={handleBairroChange}>
                                    <option value="">Bairro</option>
                                    {filme.bairro.map(bairro1 => (
                                        <option key={bairro1} value={bairro1}>{bairro1}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select id="unidade" value={unidadeSelecionada} onChange={handleUnidadeChange}>
                                <option value="">Unidade</option>
                                {filme.unidade.map(unidade1 => (
                                    <option key={unidade1} value={unidade1}>{unidade1}</option>
                                ))}
                                </select>
                            </div> */}
                            <div>
                                <select id="bairro" value={bairroSelecionado} onChange={handleBairroChange}>
                                    <option value="">Bairro</option>
                                    <option key={filme.bairro} value={filme.bairro}>{filme.bairro}</option>
                                </select>
                            </div>
                            <div>
                                <select id="unidade" value={unidadeSelecionada} onChange={handleUnidadeChange}>
                                <option value="">Unidade</option>
                                <option key={filme.unidade} value={filme.unidade}>{filme.unidade}</option>
                                </select>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
            <div className={styles.salas}>
                <div>
                    <button onClick={() => toggleRoomSelection('2D')} className={styles.button_select}  style={{backgroundColor: selectedRooms[0] === true ? '#d48c29' : 'transparent'}}>2D</button>
                    <button onClick={() => toggleRoomSelection('3D')} className={styles.button_select} style={{backgroundColor: selectedRooms[1] === true ? '#d48c29' : 'transparent'}}>3D</button>
                    <button onClick={() => toggleRoomSelection('IMAX')} className={styles.button_select} style={{backgroundColor: selectedRooms[2] === true ? '#d48c29' : 'transparent'}}>IMAX</button>
                </div>
                <div className={styles.sections}>
                {selectedRooms[0] && (
                    <div>
                        <button className={styles.button_select}>2D</button>
                        <div>
                            <button onClick={() => handleButtonTimeClick(this.value)}>13:25</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>19:45</button>
                        </div>
                    </div>
                )}
                {selectedRooms[1] && (
                    <div>
                        <button className={styles.button_select}>3D</button>
                        <div>
                            <button onClick={() => handleButtonTimeClick('20:00')}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>20:00</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>22:15</button>
                        </div>
                    </div>                   
                )}
                {selectedRooms[2] && (
                    <div>
                        <button className={styles.button_select}>IMAX</button>
                        <div>
                            <button onClick={() => handleButtonTimeClick(this.value)}>13:15</button>
                            <button onClick={() => handleButtonTimeClick(this.value)}>18:00</button>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

