import styles from "./styles.module.css";

export function Logo () {
  return (
    <>
      <div className={styles.logoContainer}>
        <div className={styles.logoLine}></div>
        <h1 className={styles.logo}>Loc It!</h1>
        <div className={styles.logoLine}></div>
      </div>
    </>
  )
}