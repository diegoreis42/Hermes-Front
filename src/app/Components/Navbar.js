'use client'

import styles from './styles/Navbar.module.css'
import Link from 'next/link'
import {useState} from 'react'

export default function Navbar () {
    const [menuHamburguer, setMenuHamburguer] = useState(false);

    const handleMenuClick = () => {
        setMenuHamburguer((prevMenuHamburguer) => !prevMenuHamburguer); 
    }

    return (
        <nav className={styles['navbar']}>
            <div className={styles['home']}>
                <Link href='/'>
                    <img src='./img/logo.png' className={styles['logo']} alt='' />
                    <img src='./img/logo-alt.png' className={styles['logo-alt']} alt='' />
                </Link>
            </div>
            
            <div className={styles['login-register']}>
                <ul className={styles['lista']}>
                    <li className={styles['opcao']}>
                        <Link href='/login' className={styles['ancora']}>Login</Link>
                    </li>

                    <li className={styles['opcao']}>
                        <Link href='/register' className={styles['ancora']}>Cadastro</Link>
                    </li>
                </ul>
            </div>

            <div className={styles['login-register-alt']}>
                <ul className={styles['lista']} style={{visibility : menuHamburguer ? 'visible' : 'hidden'}}>
                    <li className={styles['opcao']}>
                        <Link href='/login' className={styles['ancora']}>Login</Link>
                    </li>

                    <li className={styles['opcao']}>
                        <Link href='/register' className={styles['ancora']}>Cadastro</Link>
                    </li>
                </ul>

                <button onClick={handleMenuClick} className={styles['hamburguer']}>&#9776;</button>
            </div>
        </nav>
        
    );
}