import { useState } from "react";
import styles from "./styles.module.css";

type DoubleButtonProps = {
  rightText: string;
  leftText: string;
}

export function DoubleButton({ rightText, leftText }: DoubleButtonProps) {

  const [ slide, setSlide ] = useState(styles.slideLeft);

  function slideRight () {
    setSlide(styles.slideRight);
  }

  function slideLeft () {
    setSlide(styles.slideLeft);
  }

  return (
    <div className={styles.doubleButtonBox}>
      <button className={styles.button} onClick={slideLeft}>{rightText}</button>
      <button className={styles.button} onClick={slideRight}>{leftText}</button>
      <div className={`${styles.slider} ${slide}`}></div>
    </div>
  )
}