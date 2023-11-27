'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios, * as others from 'axios'
import Link from 'next/link'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/navigation'
import styles from './page.module.css'
import {setCookie} from 'nookies'

export default function Login () {
    const schema = yup.object({
        email: yup.string().email('O e-mail é inválido.').required('Um e-mail precisa ser informado.'),
        password: yup.string().required('Uma senha precisa ser informada.')
    });

    const [msg, setMsg] = useState('');
    const [esqueceu, setEsqueceu] = useState(false);

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const {register, handleSubmit, formState} = form;

    const {errors} = formState;

    const router = useRouter();

    const submit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/login', data);
            
            if(response.status === 200){
                const token = response.data.token; // extrai o token

                setCookie(null, 'access_token', `Bearer ${token}`);

                setMsg(response.data.feedback); // imprime o feedback

                setEsqueceu(false);
            
                if(token)router.push('/session');
            }
        } catch (error) {
            setMsg(error.response.data);

            setEsqueceu(true);
        }
    }
    
    return (
        <main className={styles['outro']}>
            <h2>Entre para acessar os serviços!</h2>

            <form onSubmit={handleSubmit(submit)} noValidate className={styles['login']}>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' {...register('email')} />
                <p className={styles['erro']}>{errors.email?.message}</p>

                <label htmlFor='password'>Senha</label>
                <input type='password' id='password' {...register('password')} />
                <p className={styles['erro']}>{errors.password?.message}</p>

                <button className={styles['botao']}>Entrar</button>
            </form>

            <p className={styles['sucesso']} style={{visibility : esqueceu ? 'hidden' : 'visible' }}>{msg}</p>

            <p className={styles['erro']} style={{visibility : esqueceu ? 'visible' : 'hidden' }}>{msg}</p>

            <div className={styles['cadastro']}>
                <p>Não possui conta?</p>
                <Link href='/register' className={styles['ancora']}>Cadastro</Link>
            </div>

            <div className={styles['trocar-senha']} style={{visibility : esqueceu ? 'visible' : 'hidden' }}>
                <p className={styles['erro']}>Esqueceu sua senha?</p>
                <Link href='/lost-account' className={styles['ancora']}>Trocar senha</Link>
            </div >
        </main>
    )
}