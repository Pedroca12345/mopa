import { createContext, type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

export type UserContextProps = {
  state: UserModel;
  setState: React.Dispatch<SetStateAction<UserModel>>
}

const initialState: UserModel = {
  password: "",
  username: "",
  token: ""
}

export const UserContext = createContext<UserContextProps>({
  state: initialState,
  setState: () => { }
});
