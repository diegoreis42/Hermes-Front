'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './page.module.css'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/navigation'
import useStorage from '../hooks/useStorage';

export default function Session () {
    const [msg, setMsg] = useState('');
    const [validado, setValidado] = useState(false);

    const { getItem } = useStorage();

    const router = useRouter();

    const user = getItem('user');
    if(user){
        const nomeUsuario = JSON.parse(user).name;
    }

    useEffect(() => {
        const cookies = parseCookies(null);

        async function validaSessao(data) {            
            try{
                const response = await axios.get(PATH_ME, {headers: {Authorization: data}});

                if(response.status === 200){
                    setValidado(true);
                }
            } catch (error) {
                setValidado(false);
            }
        }

        validaSessao(cookies['access_token']);
    }, []);

    if(validado){
        return (
            <main>
                <div className={styles['menu']}>
                    <h2>Olá, {nomeUsuario}!</h2>

                    <button className={styles['opcao']}>Trocar senha</button>

                    <button className={styles['opcao']}>Trocar nickname</button>

                    <button className={styles['opcao']}>Remover conta</button>
                </div>
            </main>
        )
    }else{
        router.push('/login');
    }
}