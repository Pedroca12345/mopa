import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Lock, User } from "lucide-react";
import { useUserContext } from "../../contexts/UserContext/useUserContext";
import type { UserModel } from "../../models/UserModel";
import { Logo } from "../Logo";

import axios from "axios";
import styles from "./styles.module.css";

export function LoginBox() {

  const { state } = useUserContext();

  async function handleClick() {
    const loginBody: UserModel = {
      username: state.username,
      password: state.password,
      token: ""
    }

    const response = await axios.post<UserModel>("http://localhost:3000/login", loginBody);

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      window.location.href = "/home"
    }
  }

  return (
    <>
      <Logo 
        size="large"
        line="true"
      />
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
    </>

  )
}