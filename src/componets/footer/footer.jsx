import styles from './footer.module.css'; 
import Logo from '../../assets/img/LOGOCOLSAM.png'; 
export default function Footer(){
    return (
        <>
        <div>
            <footer className={styles.footer}> {/* Utiliza la clase del módulo CSS */}
                
                <div>
                    <span>Copyright © 2024 All Rights Reserved</span>
                    <img src={Logo} alt="" srcset="" />
                </div>
            </footer>
        </div>
        </>
    )
}