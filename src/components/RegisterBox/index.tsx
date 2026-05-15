import { useState } from "react";
import { Button } from "../Button";
import { EmailInput } from "../EmailInput";
import { PasswordInput } from "../PasswordInput";
import { UsernameInput } from "../UsernameInput";

import styles from "./styles.module.css";
import type { UserModel } from "../../models/UserModel";

const initialValue: UserModel = {
  email: "",
  password: "",
  username: ""
}

export function RegisterBox() {

  const [value, setValue] = useState(initialValue);

  function handleClick () {
    console.log(value)
  }

  return (
    <>
      <div className={styles.registerBox}>
        <div className={styles.inputBox}>
          <UsernameInput inputValue= {value} setValue={setValue} />
          <EmailInput inputValue= {value} setValue={setValue} />
          <PasswordInput inputValue= {value} setValue={setValue} />
        </div>
        <Button
          buttonText="Criar conta"
          onClick={handleClick}
        />
      </div>
    </>
  )
}