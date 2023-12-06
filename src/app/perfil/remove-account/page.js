'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styles from './page.module.css'
import { ApiConnection } from '../../../../enums'
import useStorage from '../../hooks/useStorage';
import { useRouter } from 'next/navigation'

export default function LostAccount () {
    const schema = yup.object({
        email: yup.string().email('O e-mail é inválido.').required('Um e-mail precisa ser informado.'),
        password: yup.string().min(4, 'A senha é insegura.').required('Uma senha precisa ser informada.')
    });

    const { getItem } = useStorage();

    const user = getItem('user');
    const [msg, setMsg] = useState('');
    const [ok, setOk] = useState(false);

    const router = useRouter();
    const form = useForm({
        resolver: yupResolver(schema)
    });

    const {register, handleSubmit, formState} = form;

    const {errors} = formState;

    const submit = async (data) => {
        try {
            const response = await axios.post(ApiConnection.PATH_AUTH + `/${JSON.parse(user).id}`, {password: data.password});

            if(response.status === 200){
                
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <main className={styles['outro']}>
            <form onSubmit={handleSubmit(submit)} noValidate className={styles['remover-conta']}>
                <h2 className={styles['info']}>Apague sua conta!</h2>

                <label htmlFor='password'>Senha</label>
                <input type='password' id='password' {...register('password')} />
                <p className={styles['erro']}>{errors.password?.message}</p>

                <button className={styles['botao']}>Enviar</button>
            </form>
        </main>
    )
}