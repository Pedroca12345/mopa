import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Lock, User } from "lucide-react";
import { useUserContext } from "../../contexts/UserContext/useUserContext";
import type { UserModel } from "../../models/UserModel";

import axios from "axios";
import styles from "./styles.module.css";

export function LoginBox() {

  const {state} = useUserContext();

  async function handleClick () {
    const loginBody: UserModel = {
      username: state.username,
      password: state.password
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
          value={state.username}
        />

        <Input
          inputID="password"
          inputType="password"
          labelFor="password"
          labelText="Senha:"
          inputPlaceholder="Digite sua senha"
          Icon={Lock}
          inputName="password"
          value={state.password}
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
    </div>
  )
}