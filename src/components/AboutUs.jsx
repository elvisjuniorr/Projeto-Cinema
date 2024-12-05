import styles from './aboutUs.module.css'

export function AboutUs (){
    return (
        <div className={styles.about_us}>
            <div className={styles.about_us_left}>
                <img src="src/assets/movie_theater.png"/>
            </div>
            <div className={styles.about_us_right}>
                <p>~ QUEM NÓS SOMOS</p>
                <p>RESERVE O MELHOR ASSENTO DO CONFORTO DA SUA CASA</p>
                <p>Para o C&#123;IN&#125;EMA, a modernização e a tecnologia são necessidades para a conquista do aprimoramento. Pensando nisto, buscamos a mais alta tecnologia para os nossos serviços. Criamos formas simplificadas para a venda de ingresso, nossas bilheterias são totalmente informatizadas, com venda antecipada e informações claras e objetivas para a agilidade do nosso atendimento.</p>
                <div>
                    <img src="src/assets/rocket_icon.svg"/>
                    <p>LIDERANÇA<span>Com comodidades de primeira classe, o C&#123;IN&#125;EMA é reconhecida como o líder da indústria e um destino icônico para os cinéfilos no Brasil e em todo o mundo</span></p>
                </div>
                <div>
                    <img src="src/assets/idea_icon.svg"/>
                    <p>REVOLUÇÃO<span>O C&#123;IN&#125;EMA continua a inovar pensando nos espectadores. O porta-copos embutido na poltrona, o assento em estilo estádio e o primeiro programa de recompensas da indústria revolucionaram a indústria cinematográfica.</span></p>
                </div>
            </div>
        </div>
    )
}
