import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Lock, User } from "lucide-react";
import { Anchor } from "../Anchor";

import styles from "./styles.module.css";


export function LoginBox() {
  return (
    <div className={styles.loginBox}>
      <div className={styles.inputBox}>
        <Input 
        inputID="user"
        inputType="text"
        labelFor="user"
        labelText="Usuário:"
        inputPlaceholder="Nome de Usuário"
        Icon={User}
      />

      <Input 
        inputID="password"
        inputType="password"
        labelFor="password"
        labelText="Senha:"
        inputPlaceholder="Digite sua senha"
        Icon={Lock}
      />
      </div>
      <Checkbox 
        checkID="keepConnected"
        labelFor="keepConnected"
        labelText="Lembar de mim"
      />
      <Button 
        buttonText="Entrar"
      />

      <Anchor AnchorText="Esqueci minha senha"/>
    </div>
  )
}