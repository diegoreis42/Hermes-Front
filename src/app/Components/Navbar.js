'use client'

import styles from './styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'; // Importe o ícone do menu hambuguer

export default function Navbar() {
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
                {/* Utilizando um ícone para o menu hambuguer */}
                <button onClick={handleMenuClick} className={styles['hamburguer']}>
                    <FaBars />
                </button>

                <ul className={`${styles['lista']} ${styles['menuAberto']}`} style={{ visibility: menuHamburguer ? 'visible' : 'hidden', width: menuHamburguer ? '100%' : '0' }}>
                    <li className={`${styles['opcao']} ${styles['menuAbertoItem']}`}>
                        <Link href='/login' className={styles['ancora']}>Login</Link>
                    </li>
                    <li className={`${styles['opcao']} ${styles['menuAbertoItem']}`}>
                        <Link href='/register' className={styles['ancora']}>Cadastro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
