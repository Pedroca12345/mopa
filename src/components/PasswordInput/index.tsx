import { Lock } from "lucide-react";
import { Input } from "../Input";
import { type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

type PasswordInputProps = {
  inputValue: UserModel;
  setValue: React.Dispatch<SetStateAction<UserModel>>
}

export function PasswordInput ({ inputValue, setValue }: PasswordInputProps) {
  
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    const {name, value} = event.target
    setValue({
      ...inputValue,
      [name]: value
    });
  }

  return <Input 
    Icon={Lock}
    inputID="password"
    inputName="password"
    inputPlaceholder="Digite sua senha"
    inputType="password"
    labelFor="password"
    labelText="Senha:"
    onChange={handleChange}
    inputValue={inputValue}
    setValue={setValue}
  />
}