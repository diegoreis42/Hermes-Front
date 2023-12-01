import styles from './styles/Credit.module.css'

export default function Credit () {
    return (
        <div className={styles['assinatura']}>
            Feito com <p className={styles['amor']}>&hearts;</p> por
            <a className={styles['ancora']}>Diego</a>,
            <a href='https://github.com/Yumiowari' className={styles['ancora']}>Rafael</a>,
            <a className={styles['ancora']}>Tamiris</a>!
        </div>
    )
}