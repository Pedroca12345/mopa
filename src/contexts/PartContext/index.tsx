import { createContext, type SetStateAction } from "react";
import type { PartModel } from "../../models/PartModel";

export type PartContextProps = {
  parts: PartModel[];
  setParts: React.Dispatch<SetStateAction<PartModel[]>>
}

const initialState: PartModel[] = [
  {
    description: "",
    location: "",
    partcode:"",
    quantity: 0
  }
]

export const PartContext = createContext<PartContextProps>({
  parts: initialState,
  setParts: () => {}
});