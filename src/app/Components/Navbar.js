import styles from './styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['home']}>
                <li className={styles['opcao']}>
                    <Link href='/' className={styles['ancora']}>Home</Link>
                </li>
            </ul>

            <img src='./img/logo.png' className={styles['logo']}/>

            <ul className={styles['login-register']}>
                <li className={styles['opcao']}>
                    <Link href='/login' className={styles['ancora']}>Login</Link>
                </li>

                <li className={styles['opcao']}>
                    <Link href='/register' className={styles['ancora']}>Cadastro</Link>
                </li>
            </ul>
        </nav>
        
    );
}