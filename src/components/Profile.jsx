import styles from './profile.module.css'
import React, { useState } from 'react';

export function Profile (){

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
                
            </section>
        </section>
    )
}

