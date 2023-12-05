'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './page.module.css'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/navigation'

export default function Session () {
    const [msg, setMsg] = useState('');

    const router = useRouter();

    useEffect(() => {
        const cookies = parseCookies(null);

        async function validaSessao(data) {            
            try{
                const response = await axios.get('http://localhost:3001/session', {headers: {Authorization: data}});

                if(response.status === 200){ // remover /!\
                    return (
                        <main>
                            <div className={styles['menu']}>
                                <button>Trocar senha</button>
                                <button>Trocar nickname</button>
                                <button>Remover conta</button>
                            </div>
                        </main>
                    )
                }
            } catch (error) {
                router.push('/login');
            }
        }

        validaSessao(cookies['access_token']);
    }, []);
}