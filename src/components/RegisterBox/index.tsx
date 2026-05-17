// import axios from "axios";

import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Mail, User, Lock, EyeClosed } from "lucide-react";

import type { UserModel } from "../../models/UserModel";

import styles from "./styles.module.css";

const initialValue: UserModel = {
  email: "",
  password: "",
  username: ""
}

const email: keyof UserModel = "email";
const password: keyof UserModel = "password";
const username: keyof UserModel = "username";

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
    inputPlaceholder: "Digite sua senha",
    inputType: "password",
    labelFor: "password",
    labelText: "Senha:",
    Icon: Lock,
    PasswordIcon: EyeClosed
  }
]

export function RegisterBox() {

  const [value, setValue] = useState(initialValue);

  async function handleClick() {

    // const RegisterBody: UserModel = {
    //   email: value.email,
    //   username: value.username,
    //   password: value.password
    // }

    // const response = await axios.post<UserModel>("http://localhost:3000/register", RegisterBody);

    console.log("Hello world");

  }

  return (
    <>
      <div className={styles.registerBox}>
        <div className={styles.inputBox}>
          {inputs.map(({ inputID, inputName, inputPlaceholder, inputType, labelFor, labelText, Icon, PasswordIcon }, index) => {
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
                PasswordIcon={PasswordIcon}
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