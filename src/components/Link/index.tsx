import styles from "./styles.module.css";

type LinkProps = {
  linkText: string;
}

export function Link ({ linkText }: LinkProps) {
  return (
    <a href="" className={styles.link}>{linkText}</a>
  )
}