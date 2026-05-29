import { Eye, EyeClosed, type LucideIcon } from "lucide-react";
import React, { useState } from "react";
import type { UserModel } from "../../models/UserModel";
import { Warning } from "../Warning";
import { useUserContext } from "../../contexts/UserContext/useUserContext";

import styles from "./styles.module.css";

type InputProps = {
  labelText: string;
  labelFor: string;
  inputType: string;
  inputID: string;
  inputPlaceholder: string;
  inputName: keyof UserModel;
  Icon: LucideIcon;
  PasswordIcon?: LucideIcon | undefined;
} & React.ComponentProps<"input">;

export function Input({ labelText, labelFor, inputType, inputID, inputPlaceholder, Icon, PasswordIcon = EyeClosed, inputName }: InputProps) {

  const { state, setState } = useUserContext();

  const [focusColor, setFocusColor] = useState("#cfcfcf");
  const [inputTypeValue, setInputTypeValue] = useState(inputType);
  const [EyeIcon, setEyeIcon] = useState<LucideIcon>(PasswordIcon);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFocusColor("#ffca38");

    setState({
      ...state,
      [name]: value
    });
  }

  function handleIconClick() {
    if (!state.password) return
    if (inputID === "password") {
      setEyeIcon(Eye);
      setInputTypeValue("text");
    }
    if (inputTypeValue === "text") {
      setEyeIcon(EyeClosed);
      setInputTypeValue("password");
    }
  }

  function focus() {
    if (focusColor === "#ff5b5b") {
      setFocusColor("#ff5b5b");
      return;
    }
    setFocusColor("#ffca38");
  }

  function blur(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      setFocusColor("#ff5b5b");
      return;
    }

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
          value={state[inputName]}
          style={{ outline: "2px solid " + focusColor }}
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
                color={focusColor}
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
      {
        focusColor === "#ff5b5b" ? <Warning warningText="Este campo não pode estar vazio!" /> : <></>
      }
    </div>
  )
}