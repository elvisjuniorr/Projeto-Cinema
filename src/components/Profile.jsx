import styles from './profile.module.css'
import React, { useState } from 'react';
import { LuClock4 } from "react-icons/lu";
import { BsCameraReels } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { TbArmchair } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { LuNotebookText } from "react-icons/lu";
import { ImQrcode } from "react-icons/im";

export function Profile (){

    const filme = {
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
            hours: 2,
            minutes: 29, 
        };

    return (
        <section className={styles.profile}>
            <section className={styles.profile_widgets}>
                <button><img src="src/assets/user_icon.svg"/></button>
                <button><img src="src/assets/ticket_icon.svg"/></button>
                <button><img src="src/assets/payment_icon.svg"/></button>
                <button><img src="src/assets/help_support_icon.svg"/></button>
                <button><img src="src/assets/terms_policies_icon.svg"/></button>
                <button><img src="src/assets/report_problem_icon.svg"/></button>
                <button><img src="src/assets/log_out_icon.svg"/></button>
            </section>
            <section className={styles.profile_user}>
                <form>
                    <section  className={styles.input_foto}>
                        <label htmlFor="input_foto" >
                            <img src="src/assets/profile.png" alt="Foto de perfil" />
                        </label>
                        <input type="file" id="input_foto" style={{ display: 'none' }} />
                    </section>
                    <label>Nome</label>
                    <input className={styles.input_nome} id='input_nome'></input>
                    <label>Sobrenome</label>
                    <input className={styles.input_sobrenome}></input>
                    <label>E-mail</label>
                    <input className={styles.input_email} id='input_email'></input>
                    <label >Senha</label>
                    <input className={styles.input_senha} id='input_senha' type="password"></input>
                    <button type="submit" id='submit_form'><img src='src/assets/sign_up_button.svg'/></button>
                </form>
            </section>
            <section className={styles.profile_ticket}>
                <section className={styles.ticket}>
                    <section className={styles.section_movie_informations}>
                        <img src={filme.poster} />
                        <section>
                            <h3>{filme.titulo}</h3>  
                            <p><LuClock4 /> {filme.hours} hours {filme.minutes} minutes</p>                                 
                            <p><BsCameraReels /> {filme.genero} </p>    
                        </section>                           
                    </section>
                    <section className={styles.section_session_informations}>
                        <section>
                            <LuCalendarDays style={{fontSize: "2rem" }}/>
                            <section>
                                <p>14h15’</p>
                                <p>10.12.2022</p>
                            </section>
                        </section>
                        <section>
                            <TbArmchair style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Section 4</p>
                                <p>Seat H7, H8</p>
                            </section>
                        </section>
                    </section>
                    <img src="src/assets/line.svg" />
                    <section className={styles.section_ticket_informations}>
                        <section>
                            <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                            <p>R$50,00</p>                               
                        </section>
                        <section>
                            <TfiLocationPin style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Vincom Ocean Park</p>
                                <p>4th floor, Vincom Ocean Park, Da Ton, Gia Lam, Ha Noi</p>
                            </section>
                        </section>
                        <section>
                            <LuNotebookText style={{fontSize: "2rem" }}/>   
                            <p>Show this QR code to the ticket counter to receive your ticket</p>                               
                        </section>
                    </section>
                    <section className={styles.section_line}>
                        <div></div>
                        <img src="src/assets/linha_pontilhada.svg" />
                        <div></div>
                    </section>
                    <section className={styles.section_qr_code}>
                        <ImQrcode style={{fontSize: "6rem" }}/>
                        <p>Oder ID: 78889377726</p>
                    </section>
                </section>    
                <section className={styles.ticket_example_left}>
                    <section className={styles.section_movie_informations}>
                        <div></div>
                        <section>
                            <h3>{filme.titulo}</h3>  
                            <p><LuClock4 /> {filme.hours} hours {filme.minutes} minutes</p>                                 
                            <p><BsCameraReels /> {filme.genero} </p>    
                        </section>                           
                    </section>
                    <section className={styles.section_session_informations}>
                        <section>
                            <LuCalendarDays style={{fontSize: "2rem" }}/>
                            <section>
                                <p>14h15’</p>
                                <p>10.12.2022</p>
                            </section>
                        </section>
                        <section>
                            <TbArmchair style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Section 4</p>
                                <p>Seat H7, H8</p>
                            </section>
                        </section>
                    </section>
                    <img src="src/assets/line.svg" />
                    <section className={styles.section_ticket_informations}>
                        <section>
                            <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                            <p>R$50,00</p>                               
                        </section>
                        <section>
                            <TfiLocationPin style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Vincom Ocean Park</p>
                                <p>4th floor, Vincom Ocean Park, Da Ton, Gia Lam, Ha Noi</p>
                            </section>
                        </section>
                        <section>
                            <LuNotebookText style={{fontSize: "2rem" }}/>   
                            <p>Show this QR code to the ticket counter to receive your ticket</p>                               
                        </section>
                    </section>
                    <section className={styles.section_line}>
                        <div></div>
                        <img src="src/assets/linha_pontilhada.svg" />
                        <div></div>
                    </section>
                    <section className={styles.section_qr_code}>
                        <ImQrcode style={{fontSize: "6rem" }}/>
                        <p>Oder ID: 78889377726</p>
                    </section>
                </section>   
                <section className={styles.ticket_example_right}>
                    <section className={styles.section_movie_informations}>
                        <div></div>
                        <section>
                            <h3>{filme.titulo}</h3>  
                            <p><LuClock4 /> {filme.hours} hours {filme.minutes} minutes</p>                                 
                            <p><BsCameraReels /> {filme.genero} </p>    
                        </section>                           
                    </section>
                    <section className={styles.section_session_informations}>
                        <section>
                            <LuCalendarDays style={{fontSize: "2rem" }}/>
                            <section>
                                <p>14h15’</p>
                                <p>10.12.2022</p>
                            </section>
                        </section>
                        <section>
                            <TbArmchair style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Section 4</p>
                                <p>Seat H7, H8</p>
                            </section>
                        </section>
                    </section>
                    <img src="src/assets/line.svg" />
                    <section className={styles.section_ticket_informations}>
                        <section>
                            <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                            <p>R$50,00</p>                               
                        </section>
                        <section>
                            <TfiLocationPin style={{fontSize: "2rem" }}/>
                            <section>
                                <p>Vincom Ocean Park</p>
                                <p>4th floor, Vincom Ocean Park, Da Ton, Gia Lam, Ha Noi</p>
                            </section>
                        </section>
                        <section>
                            <LuNotebookText style={{fontSize: "2rem" }}/>   
                            <p>Show this QR code to the ticket counter to receive your ticket</p>                               
                        </section>
                    </section>
                    <section className={styles.section_line}>
                        <div></div>
                        <img src="src/assets/linha_pontilhada.svg" />
                        <div></div>
                    </section>
                    <section className={styles.section_qr_code}>
                        <ImQrcode style={{fontSize: "6rem" }}/>
                        <p>Oder ID: 78889377726</p>
                    </section>
                </section>        
            </section>
        </section>
    )
}

