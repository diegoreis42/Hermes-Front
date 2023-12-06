import styles from "./styles/Credit.module.css";

export default function Credit() {
  return (
    <div className={styles["assinatura"]}>
      Feito com <p className={styles["amor"]}><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">&hearts;</a></p> por
      <a href="https://github.com/diegoreis42" className={styles["ancora"]}>
        Diego
      </a>
      ,
      <a href="https://github.com/Yumiowari" className={styles["ancora"]}>
        Rafael
      </a>
      ,
      <a href="https://github.com/Tamiris73" className={styles["ancora"]}>
        Tamiris
      </a>
      !
    </div>
  );
}
