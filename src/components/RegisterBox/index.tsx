import { User, Lock, Mail, LockKeyhole } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";

import styles from "./styles.module.css";


export function RegisterBox() {
  return (
    <>
      <div className={styles.registerBox}>
        <div className={styles.inputBox}>
          <Input
            inputID="email"
            inputType="email"
            labelFor="email"
            labelText="Digite seu e-mail:"
            inputPlaceholder="mopa@mozo.com"
            Icon={Mail}
          />

          <Input
            inputID="username"
            inputType="text"
            labelFor="user"
            labelText="Crie um nome de usuário:"
            inputPlaceholder="Nome de Usuário"
            Icon={User}
          />
          <Input
            inputID="password"
            inputType="password"
            labelFor="password"
            labelText="Crie uma senha:"
            inputPlaceholder="Senha"
            Icon={Lock}
          />

          <Input
            inputID="confirmPassword"
            inputType="password"
            labelFor="confirmPassword"
            labelText="Confirme sua senha:"
            inputPlaceholder="Repita sua senha"
            Icon={LockKeyhole}
          />
        </div>
        <Button
          buttonText="Criar conta"
        />
      </div>
    </>
  )
}