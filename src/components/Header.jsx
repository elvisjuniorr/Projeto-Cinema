import styles from './header.module.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Header (){

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.header}>
            <img src='src/assets/infeed_logo.svg' alt='Logo'/>
            <div>
                <a href='http://localhost:5173/?'><img src='src/assets/infeed_movies.svg' alt='Movies'/></a>
                <a href='http://localhost:5173/LogIn'><img src='src/assets/infeed_sign_in.svg' alt='Sign in'/></a>
                <a href='http://localhost:5173/AboutUs'><img src='src/assets/infeed_help.svg' alt='Help'/></a>
            </div>
        </div>
    )
}