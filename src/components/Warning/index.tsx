import styles from "./styles.module.css";

type WarningProps = {
  warningText: string;
}

export function Warning({ warningText }: WarningProps) {
  return (
    <span className={styles.warning}>{warningText}</span>
  )
}
