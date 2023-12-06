"use client"
import styles from './page.module.css'

export default function Error () {
    return (
        <>
            <div className="py-[24rem] flex justify-center items-center">
                <div className='flex flex-col'>
                    <h1 className='text-2xl flex items-center justify-center'>Erro 400</h1>
                    <p>Você não possui permissão para aceesar esta página</p>
                    <button className={styles['opcao']}><a href="http://localhost:3000/login">Logar</a></button>
                </div>    
            </div>
        </>
    )
}