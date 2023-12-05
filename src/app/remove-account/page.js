'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios, * as others from 'axios'
import Link from 'next/link'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styles from './page.module.css'

export default function LostAccount () {
    const schema = yup.object({
        email: yup.string().email('O e-mail é inválido.').required('Um e-mail precisa ser informado.'),
        password: yup.string().min(4, 'A senha é insegura.').required('Uma senha precisa ser informada.')
    });

    const [msg, setMsg] = useState('');
    const [ok, setOk] = useState(false);

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const {register, handleSubmit, formState} = form;

    const {errors} = formState;

    const submit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/remove-account', data);

            if(response.status === 200){
                setMsg(response.data);
                
                setOk(true);
            }
        } catch (error) {
            setMsg(error.response.data);

            setOk(false);
        }
    }
    
    return (
        <main className={styles['outro']}>
            <h2 className={styles['info']}>Apague sua conta!</h2>

            <form onSubmit={handleSubmit(submit)} noValidate className={styles['remover-conta']}>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' {...register('email')} />
                <p className={styles['erro']}>{errors.email?.message}</p>

                <label htmlFor='password'>Senha</label>
                <input type='password' id='password' {...register('password')} />
                <p className={styles['erro']}>{errors.password?.message}</p>

                <button className={styles['botao']}>Excluir conta</button>
            </form>

            <p className={styles['sucesso']} style={{display : ok ? '' : 'none' }}>{msg}</p>

            <p className={styles['erro']} style={{display : ok ? 'none' : '' }}>{msg}</p>
        </main>
    )
}