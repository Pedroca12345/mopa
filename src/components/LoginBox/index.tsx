import { Button } from "../Button";
import { Input } from "../Input";

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
      />

      <Input 
        inputID="password"
        inputType="password"
        labelFor="password"
        labelText="Senha:"
        inputPlaceholder="Digite sua senha"
      />
      <Button 
        buttonText="Login"
      />
      </div>
    </div>
  )
}