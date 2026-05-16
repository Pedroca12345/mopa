import { useState } from "react";
import { Button } from "../Button";
import type { UserModel } from "../../models/UserModel";
import { Input } from "../Input";
import { Mail, User, Lock } from "lucide-react";

import styles from "./styles.module.css";

const initialValue: UserModel = {
  email: "",
  password: "",
  username: ""
}

const email: keyof UserModel = "email"
const password: keyof UserModel = "password"
const username: keyof UserModel = "username"

const inputs = [
  {
    inputID: "username",
    inputName: username,
    inputPlaceholder: "Nome de usuário:",
    inputType: "text",
    labelFor: "username",
    labelText: "Crie um nome de usuário:",
    Icon: User,
  },
  {
    inputID: "email",
    inputName: email,
    inputPlaceholder: "example@example.com",
    inputType: "email",
    labelFor: "email",
    labelText: "Digite seu email",
    Icon: Mail,
  },
  {
    inputID: "password",
    inputName: password,
    inputPlaceholder: "Senha:",
    inputType: "password",
    labelFor: "password",
    labelText: "Digite sua senha",
    Icon: Lock,
  }
]

export function RegisterBox() {

  const [value, setValue] = useState(initialValue);

  function handleClick() {
    console.log(value)
  }

  return (
    <>
      <div className={styles.registerBox}>
        <div className={styles.inputBox}>
          {inputs.map(({ inputID, inputName, inputPlaceholder, inputType, labelFor, labelText, Icon }, index) => {
            return (
              <Input
                key={index}
                Icon={Icon}
                inputID={inputID}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                inputType={inputType}
                inputValue={value}
                labelFor={labelFor}
                labelText={labelText}
                setValue={setValue}
              />
            )
          })}
        </div>
        <Button
          buttonText="Criar conta"
          onClick={handleClick}
        />
      </div>
    </>
  )
}