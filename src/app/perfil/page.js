'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './page.module.css'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/navigation'
import useStorage from '../hooks/useStorage';

export default function Session () {
    const [validado, setValidado] = useState(false);

    const { getItem } = useStorage();

    const router = useRouter();

    const user = getItem('user');

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

        validaSessao('Bearer ' + cookies['access_token']);
    }, []);

        return (
            <main>
                <div className={styles['menu']}>
                    <h2>Olá, {JSON.parse(user).name}!</h2>

                    <button className={styles['opcao']}><a href='http://localhost:3000/perfil/lost-account'>Trocar senha</a></button>

                    <button className={styles['opcao']}><a href='http://localhost:3000/perfil/change-nick'>Trocar nickname</a></button>

                    <button className={styles['opcao']}> <a href='http://localhost:3000/perfil/remove-account'>Remover conta</a></button>
                </div>
            </main>
        )

}