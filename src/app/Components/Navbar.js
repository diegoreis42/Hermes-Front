import styles from './styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
    return (
        <div className={styles['navbar']}>
            <ul className={styles['home']}>
                <li className={styles['opcao']}>
                    <Link href='/' className={styles['ancora']}>Home</Link>
                </li>
            </ul>

            <div className={styles['outro']}>Login System</div>

            <ul className={styles['login-register']}>
                <li className={styles['opcao']}>
                    <Link href='/login' className={styles['ancora']}>Login</Link>
                </li>

                <li className={styles['opcao']}>
                    <Link href='/register' className={styles['ancora']}>Cadastro</Link>
                </li>
            </ul>
        </div>
        
    );
}