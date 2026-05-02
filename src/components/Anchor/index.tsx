import styles from "./styles.module.css";

type AnchorProps = {
  AnchorText: string;
}

export function Anchor ({ AnchorText }: AnchorProps) {
  return (
    <a href="" className={styles.link}>{AnchorText}</a>
  )
}