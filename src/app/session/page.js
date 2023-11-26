'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './page.module.css'

export default function Session () {
    const [msg, setMsg] = useState('');
    const [validado, setValidado] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token'); // recupera o token no local storage

        async function validaSessao(data) {            
            try{
                const response = await axios.post('http://localhost:3001/session', {token: data});

                if(response.status === 200){
                    setValidado(true);

                    setMsg(response.data);
                }
            } catch (error) {
                setValidado(false);

                setMsg(error.response.data);
            }
        }

        validaSessao(token);
    }, []);

    if(validado){
        return (
            <main>
                <p className={styles['sucesso']}>{msg}</p>
            </main>
        )
    }else{
        return (
            <main>
                <p className={styles['erro']}>{msg}</p>
            </main>
        )
    }
}