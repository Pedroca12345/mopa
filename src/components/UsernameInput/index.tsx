import { User } from "lucide-react";
import { Input } from "../Input";
import { type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

type UsernameInputProps = {
  inputValue: UserModel,
  setValue: React.Dispatch<SetStateAction<UserModel>>
}

export function UsernameInput({ inputValue, setValue }: UsernameInputProps) {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target
    setValue({
      ...inputValue,
      [name]: value
    });
  }

  return <Input
    Icon={User}
    inputID="username"
    inputName="username"
    inputPlaceholder="Nome de usuário:"
    inputType="text"
    labelFor="username"
    labelText="Crie um nome de usuário:"
    onChange={handleChange}
    inputValue={inputValue}
    setValue={setValue}
  />
}