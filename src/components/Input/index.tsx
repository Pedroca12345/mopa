import type { LucideIcon } from "lucide-react";
import { useState } from "react";

import styles from "./styles.module.css";


type InputProps = {
  labelText: string;
  labelFor: string;
  inputType: string;
  inputID: string;
  inputPlaceholder: string;
  Icon: LucideIcon;
}

export function Input({ labelText, labelFor, inputType, inputID, inputPlaceholder, Icon }: InputProps) {

  const [ focusColor, setFocusColor ] = useState("#cfcfcf");

  function focus () {
    setFocusColor("#ffca38"); 
  }

  function blur () {
    setFocusColor("#cfcfcf"); 
  }

  return(
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelFor}>{labelText}</label>
      
      <div className={styles.inputBox}>
        <input className={styles.input} type={inputType} id={inputID} placeholder={inputPlaceholder} onFocus={focus} onBlur={blur}/>
        <Icon 
          color= {focusColor}
          className={styles.inputIcon}
          size={20}
        />
      </div>
    </div>
  )
}