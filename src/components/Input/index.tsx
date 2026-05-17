import { Eye, EyeClosed, type LucideIcon } from "lucide-react";
import { useState, type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

import styles from "./styles.module.css";

type InputProps = {
  labelText: string;
  labelFor: string;
  inputType: string;
  inputID: string;
  inputPlaceholder: string;
  inputName: keyof UserModel;
  Icon: LucideIcon;
  PasswordIcon: LucideIcon | undefined;
  inputValue: UserModel;
  setValue: React.Dispatch<SetStateAction<UserModel>>;
} & React.ComponentProps<"input">;

export function Input({ labelText, labelFor, inputType, inputID, inputPlaceholder, Icon, PasswordIcon = EyeClosed, inputName, inputValue = { email: "", username: "", password: "" }, setValue }: InputProps) {

  const [focusColor, setFocusColor] = useState("#cfcfcf");
  const [inputTypeValue, setInputTypeValue] = useState(inputType);
  const [EyeIcon, setEyeIcon] = useState<LucideIcon>(PasswordIcon);
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValue({
      ...inputValue,
      [name]: value
    });
  }

  function handleIconClick () {
    if(inputID === "password") {
      setEyeIcon(Eye);
      setInputTypeValue("text");
    }
    if(inputTypeValue === "text") {
      setEyeIcon(EyeClosed);
      setInputTypeValue("password");
    }
  }

  function focus() {
    setFocusColor("#ffca38");
  }

  function blur() {
    setFocusColor("#cfcfcf");
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelFor}>{labelText}</label>

      <div className={styles.inputBox}>
        <input
          className={styles.input}
          name={inputName}
          type={inputTypeValue}
          id={inputID}
          placeholder={inputPlaceholder}
          onFocus={focus} onBlur={blur}
          onChange={handleChange}
          value={inputValue[inputName]}
        />

        {
          inputID === "password" ?
            <>
              <Icon 
                color={focusColor}
                className={styles.inputIcon}
                size={20}
              />
              <EyeIcon
                className={styles.passwordIcon}
                size={30}
                onClick={handleIconClick}
              />
            </>
            :
            <Icon
              color={focusColor}
              className={styles.inputIcon}
              size={20}
            />
        }
      </div>
    </div>
  )
}