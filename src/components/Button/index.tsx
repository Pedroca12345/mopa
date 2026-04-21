import styles from "./styles.module.css";

type buttonProps = {
  buttonText: string;
}

export function Button ({ buttonText }: buttonProps) {
  return (
    <button className={styles.button}>
      {buttonText}
    </button>
  )
}