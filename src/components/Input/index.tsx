import styles from "./styles.module.css";

type InputProps = {
  labelText: string;
  labelFor: string;
  inputType: string;
  inputID: string;
  inputPlaceholder: string;
}

export function Input({ labelText, labelFor, inputType, inputID, inputPlaceholder }: InputProps) {
  return(
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelFor}>{labelText}</label>
      <input className={styles.input} type={inputType} id={inputID} placeholder={inputPlaceholder} />
    </div>
  )
}