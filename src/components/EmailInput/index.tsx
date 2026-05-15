import { Mail } from "lucide-react";
import { Input } from "../Input";
import { type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

type EmailInputProps = {
  inputValue: UserModel;
  setValue: React.Dispatch<SetStateAction<UserModel>>
}

export function EmailInput ({ inputValue, setValue }: EmailInputProps) {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    const {name, value} = event.target

    setValue({
      ...inputValue,
      [name]: value
    });
    console.log(value)
  }
  return <Input 
    Icon={Mail}
    inputID="email"
    inputName="email"
    inputPlaceholder="example@example.com"
    inputType="email"
    labelFor="email"
    labelText="Digite seu email:"
    onChange={handleChange}
    inputValue={inputValue}
    setValue={setValue}
  />
}