import styles from './styles/Credit.module.css'

export default function Credit () {
    return (
        <div className={styles['assinatura']}>
            Feito com <p className={styles['amor']}>&hearts;</p> por <a href='https://github.com/Yumiowari' className={styles['ancora']}>Yumiowari</a>!
        </div>
    )
}