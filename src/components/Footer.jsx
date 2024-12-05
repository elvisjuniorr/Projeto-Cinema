import styles from './footer.module.css'

const handleButtonClick = (url) => {
    window.location.href = url;
};

export function Footer (){
    return (
        <div className={styles.footer}>
            <img src='src/assets/ball_icon.svg' />
            <div>
                <img src='src/assets/infeed_logo.svg' alt='Logo' />
                <div>
                    <div>
                        <h3>Website Links</h3>
                        <a>Home</a>
                        <a>About us</a>
                        <a>Services</a>
                        <a>FAQs</a>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <a>Architecture</a>
                        <a>Building</a>
                        <a>3d maps</a>
                        <a>Structure design</a>
                    </div>
                </div>
                <img src='src/assets/line.svg' alt='Line' className={styles.line}/>
                <div>
                    <button onClick={() => handleButtonClick('https://www.facebook.com')}><img src='src/assets/facebook_icon.svg' alt='Facebook'/></button>
                    <button onClick={() => handleButtonClick('https://www.instagram.com')}><img src='src/assets/instagram_icon.svg' alt='Instagram' /></button>
                    <button onClick={() => handleButtonClick('https://www.linkedin.com')}><img src='src/assets/linkedin_icon.svg' alt='LinkedIn' /></button>
                </div>
            </div>
        </div>
    )
}