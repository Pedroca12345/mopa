import { type PartModel } from "../../models/PartModel";
import { usePartContext } from "../../contexts/PartContext/usePartContext";

import Papa from "papaparse";
import axios from "axios";

export function FileInput() {

  const { setParts } = usePartContext();

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;

    const token = localStorage.getItem("token");
    console.log(token);

    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];

    Papa.parse<PartModel>(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const parsedParts = results.data;

        setParts(parsedParts);

        for (const part of parsedParts) {
          const response = await axios.post<PartModel>(
            "http://localhost:3000/part",
            {
              description: part.description,
              location: part.location,
              partcode: part.partcode,
              quantity: part.quantity
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

          console.log(response.data);
        }
      }
    });

  }

  return (
    <>
      <input type="file" onChange={handleFileUpload} />
    </>
  )
}