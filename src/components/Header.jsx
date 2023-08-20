import styles from './header.module.css'

export function Header (){
    return (
        <div className={styles.header}>
            <img src='src/assets/infeed_logo.svg' alt='Logo'/>
            <div>
                <a href=''><img src='src/assets/infeed_movies.svg' alt='Movies'/></a>
                <a href=''><img src='src/assets/infeed_sign_in.svg' alt='Sign in'/></a>
                <a href=''><img src='src/assets/infeed_help.svg' alt='Help'/></a>
            </div>
        </div>
    )
}