import { useState } from "react";
import { PartContext } from "../../contexts/PartContext";
import type { PartModel } from "../../models/PartModel";

type PartContextProviderProps = {
  children: React.ReactNode;
}

const initialState: PartModel[] = [
  {
    description: "",
    location: "",
    partcode:"",
    quantity: 0
  }
];

export function PartContextProvider({ children }: PartContextProviderProps) {
  const [parts, setParts] = useState<PartModel[]>(initialState);

  return (
    <PartContext.Provider value={{ parts, setParts }}>
      {children}
    </PartContext.Provider>
  )
}