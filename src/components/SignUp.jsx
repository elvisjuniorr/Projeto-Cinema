import styles from './signUp.module.css'
import React, { useState } from 'react';

export function SignUp (){

    const [formData, setFormData] = useState({
        input_nome: '',
        input_sobrenome: '',
        input_email: '',
        input_confirmar_email: '',
        input_senha: '',
        input_confirmar_senha: '',
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const {
            input_nome,
            input_email,
            input_confirmar_email,
            input_senha,
            input_confirmar_senha,
        } = formData;

        if (input_nome.length < 2) {
            setMessage('Nome deve ter entre 2 e 50 caracteres.');
            return false;
        }

        // Validação do e-mail
        if (input_email !== input_confirmar_email) {
            setMessage('Os e-mails não coincidem.');
            return false;
        }

        // Validação da senha
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        

        if (!strongPasswordRegex.test(input_senha)) {
            setMessage(
                'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.'
            );
            return false;
        }

        // Validação da confirmação da senha
        if (input_senha !== input_confirmar_senha) {
            setMessage('As senhas não correspondem.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setMessage('Cadastro realizado com sucesso!');
        }
    };

    return (
        <div className={styles.sign_up0}>
            {message && <p>{message}</p>}
            <div className={styles.sign_up}>
                <div>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input className={styles.input_nome} id='input_nome' value={formData.nome} 
                    onChange={handleInputChange}></input>
                    <label>Sobrenome</label>
                    <input className={styles.input_sobrenome} value={formData.sobrenome}
                    onChange={handleInputChange}></input>
                    <label>E-mail</label>
                    <input className={styles.input_email} id='input_email' value={formData.email}
                    onChange={handleInputChange}></input>
                    <label>Confirmar e-mail</label>
                    <input className={styles.input_confirmar_email} id='input_confirmar_email' value={formData.confirmarEmail}
                    onChange={handleInputChange}></input>
                    <label >Senha</label>
                    <input className={styles.input_senha} id='input_senha' type="password"
                    value={formData.senha} onChange={handleInputChange}></input>
                    <label>Confirmar senha</label>
                    <input className={styles.input_confirmar_senha} id='input_confirmar_senha' type="password"
                    value={formData.confirmarSenha} onChange={handleInputChange}></input>
                    <div>
                        <input type="checkbox"></input>
                        <p>Eu concordo com os <a href='http://localhost:5173/'> Termos de uso</a></p>
                    </div>
                    <button type="submit" id='submit_form'><img src='src/assets/sign_up_button.svg'/></button>
                </form>
                <p>Already have an account? <a href='http://localhost:5173/'>Log In</a></p>
            </div>
        </div>
    )
}

