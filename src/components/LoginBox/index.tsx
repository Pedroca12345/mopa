import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Lock, User } from "lucide-react";
import { Anchor } from "../Anchor";
import { useState } from "react";
import type { UserModel } from "../../models/UserModel";
import axios from "axios";

import styles from "./styles.module.css";

const initialValue: UserModel = {
  username: "",
  password: "",
}

export function LoginBox() {

  const [value, setValue] = useState(initialValue);

  async function handleClick () {
    const loginBody: UserModel = {
      username: value.username,
      password: value.password
    }

    const response = await axios.post<UserModel>("http://localhost:3000/login", loginBody);

    console.log(response.data);
  }

  return (
    <div className={styles.loginBox}>
      <div className={styles.inputBox}>
        <Input
          inputID="username"
          inputType="text"
          labelFor="username"
          labelText="Usuário:"
          inputPlaceholder="Nome de Usuário"
          Icon={User}
          inputName={"username"}
          inputValue={value}
          setValue={setValue}
        />

        <Input
          inputID="password"
          inputType="password"
          labelFor="password"
          labelText="Senha:"
          inputPlaceholder="Digite sua senha"
          Icon={Lock}
          inputName="password"
          inputValue={value}
          setValue={setValue}
        />
      </div>
      <Checkbox
        checkID="keepConnected"
        labelFor="keepConnected"
        labelText="Lembrar de mim"
      />
      <Button
        id="login"
        buttonText="Entrar"
        onClick={handleClick}
      />

      <Anchor AnchorText="Esqueci minha senha" />
    </div>
  )
}