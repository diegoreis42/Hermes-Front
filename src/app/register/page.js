'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styles from './page.module.css'
import { ApiConnection } from '../../../enums'
import { useRouter } from 'next/navigation'

export default function Register () {
    const schema = yup.object({
        username: yup.string().required('Um nome de usuário precisa ser informado.'),
        email: yup.string().email('O e-mail é inválido.').required('Um e-mail precisa ser informado.'),
        password: yup.string().min(4, 'A senha é insegura.').required('Uma senha precisa ser informada.'),
        confirmPassword: yup.string().required('Confirme sua senha!').oneOf([yup.ref('password')], 'As senhas não coincidem!')
    });

    const [msg, setMsg] = useState('');
    const [ok, setOk] = useState(false); 
    const [recKey, setRecKey] = useState('');

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const router = useRouter();

    const {register, handleSubmit, formState} = form;

    const {errors} = formState;

    const submit = async (data) => {
        try {
            console.log(data)
            const response = await axios.post(ApiConnection.PATH_REGISTER, {name: data.username, email: data.email, password: data.password});

            if(response.status === 201){

                setRecKey(response.data.recoveryKey);

                setOk(true);
            }
        } catch (error) {
            setMsg(error.response.data.message); 
        
            setOk(false);
        }
    }
    
    return (
        <main className={styles['outro']}>
            <form onSubmit={handleSubmit(submit)} noValidate method='POST' className={styles['cadastro']}>
                <h2 className={styles['info']}>Cadastre-se para acessar o chat!</h2>

                <label htmlFor='username'>Nome</label>
                <input type='text' id='username' {...register('username')} />
                <p className={styles['erro']}>{errors.username?.message}</p>

                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' {...register('email')} />
                <p className={styles['erro']}>{errors.email?.message}</p>

                <label htmlFor='password'>Senha</label>
                <input type='password' id='password' {...register('password')} />
                <p className={styles['erro']}>{errors.password?.message}</p>

                <label htmlFor='confirmPassword'>Confirme a senha</label>
                <input type='password' id='confirmPassword' {...register('confirmPassword')} />
                <p className={styles['erro']}>{errors.confirmPassword?.message}</p>

                <div style={{display : ok ? '' : 'none' }}>
                    <p>Faça</p>
                    <Link href='/login' className={styles['ancora']}>Login</Link>
                </div>

                <button className={styles['botao']}>Cadastrar</button>
            </form>

            <p className={styles['sucesso']} style={{display : ok ? '' : 'none' }}>{msg}</p>

            <p className={styles['erro']} style={{display : ok ? 'none' : '' }}>{msg}</p>

            <p className={styles['rec-key']} style={{display : ok ? '' : 'none' }}>Guarde sua Recovery Key: {recKey}</p>
        </main>
    )
}