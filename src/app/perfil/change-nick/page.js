'use client'

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
        name: yup.string().required('O nome precisa ser informado.'),
    });

    const { getItem, setItem } = useStorage();
    const router = useRouter();

    const user = getItem('user');

    const form = useForm({
        resolver: yupResolver(schema)
    });


    const {register, handleSubmit, formState} = form;

    const {errors} = formState;

    const submit = async (data) => {
        try {
            const response = await axios.patch(ApiConnection.PATH_USER + `/${JSON.parse(user).id}`, {name: data.name});

            if(response.status === 200){
                
                router.push('/login');
                setOk(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <main className={styles['outro']}>
            <form onSubmit={handleSubmit(submit)} noValidate className={styles['remover-conta']}>
                <h2 className={styles['info']}>Escolha um novo nome!</h2>

                <label htmlFor='name'>Nome</label>
                <input type='text' id='name' {...register('name')} />
                <p className={styles['erro']}>{errors.name?.message}</p>

                <button className={styles['botao']}>Enviar</button>
            </form>

        </main>
    )
}