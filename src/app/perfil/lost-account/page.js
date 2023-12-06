'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styles from './page.module.css'
import { ApiConnection } from '../../../../enums'

export default function LostAccount () {
    const schema = yup.object({
        recKey: yup.string().required('A recovery key precisa ser informada.'),
        password: yup.string().min(4, 'A senha é insegura.').required('Uma senha precisa ser informada.'),
        confirmPassword: yup.string().required('Confirme sua senha!').oneOf([yup.ref('password')], 'As senhas não coincidem!')
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
            const response = await axios.post(ApiConnection.PATH_AUTH + `/${JSON.parse(user).id}/reset-password`, data);

            if(response.status === 200){
                setMsg(response.data);
                
                setOk(true); 
            }
        } catch (error) {
            console.log(error)
            return
            setMsg(error.response.data.message);

            setOk(false);
        }
    }
    
    return (
        <main className={styles['outro']}>
            <form onSubmit={handleSubmit(submit)} noValidate className={styles['trocar-senha']}>
                <h2 className={styles['info']}>Troque sua senha!</h2>

                <label htmlFor='recKey'>Recovery Key</label>
                <input type='text' id='recKey' {...register('recKey')} />
                <p className={styles['erro']}>{errors.recKey?.message}</p>

                <label htmlFor='password'>Nova senha</label>
                <input type='password' id='password' {...register('password')} />
                <p className={styles['erro']}>{errors.password?.message}</p>

                <label htmlFor='confirmPassword'>Confirme a nova senha</label>
                <input type='password' id='confirmPassword' {...register('confirmPassword')} />
                <p className={styles['erro']}>{errors.confirmPassword?.message}</p>

                <div style={{display : ok ? '' : 'none' }}>
                    <p>Faça</p>
                    <Link href='../login' className={styles['ancora']}>Login</Link>
                </div>

                <button className={styles['botao']}>Enviar</button>
            </form>

            <p className={styles['sucesso']} style={{display : ok ? '' : 'none' }}>{msg}</p>

            <p className={styles['erro']} style={{display : ok ? 'none' : '' }}>{msg}</p>
        </main>
    )
}