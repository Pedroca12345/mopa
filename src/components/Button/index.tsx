import styles from "./styles.module.css";

type buttonProps = {
  buttonText: string;
} & React.ComponentProps<"button">

export function Button ({ buttonText, ...props }: buttonProps) {
  return (
    <button className={styles.button} {...props}>
      {buttonText}
    </button>
  )
}