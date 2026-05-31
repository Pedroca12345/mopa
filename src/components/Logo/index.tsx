import styles from "./styles.module.css";

type LogoProps = {
  size: "large" | "normal" | "small";
  line: "true" | "false";
}

export function Logo ({ size, line }: LogoProps) {

  return (
    <>
      <div className={styles.logoContainer}>
        {line === "true" ? <div className={styles.logoLine}></div> : <></>}
        <h1 className={`${styles.logo} ${styles[size]}`}>M.O.P.A</h1>
        {line === "true" ? <div className={styles.logoLine}></div> : <></>}
      </div>
    </>
  )
}