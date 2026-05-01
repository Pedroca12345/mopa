import styles from "./styles.module.css";

type CheckboxProps = {
  checkID: string;
  labelText: string;
  labelFor: string;
}

export function Checkbox({ checkID, labelText, labelFor }: CheckboxProps) {
  return (
    <>
      <div className={styles.checkboxBox}>
        <input type="checkbox" id={checkID} className={styles.checkbox} />
        <label htmlFor={labelFor}>{labelText}</label>
      </div>
    </>
  )
}