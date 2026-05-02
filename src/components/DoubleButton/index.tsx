import { useState } from "react";


import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

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

       <RouterLink 
        href="/"
        className={styles.button} 
        onClick={slideLeft}
       >
        {leftText}
       </RouterLink>
      
        <RouterLink
          className={styles.button}
          href="/register"
          onClick={slideRight}
        >
          {rightText}
        </RouterLink>
      
      <div className={`${styles.slider} ${slide}`}></div>
    </div>
  )
}