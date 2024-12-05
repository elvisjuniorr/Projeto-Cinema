import styles from './logIn.module.css'

export function LogIn (){
    return (
        <div className={styles.log_in_div}>
            <div className={styles.log_in}>
                <div>Log In</div>
                <button><img src='src/assets/login_google.svg'/></button>
                <button><img src='src/assets/login_facebook.svg'/></button>
                <buttonn><img src='src/assets/login_twitter.svg'/></buttonn>
                <img src='src/assets/sign_in_or.svg'></img>
                <form>
                    <input placeholder='E-mail'></input>
                    <input placeholder='Senha'></input>
                    <button><img src='src/assets/login_log.svg'/></button>
                </form>
                <a href='http://localhost:5173/'>Forget Password?</a>
                <p>Don't Have an account? <a href='http://localhost:5173/SignUp'>Sign Up</a></p>
            </div>
        </div>
    )
}

