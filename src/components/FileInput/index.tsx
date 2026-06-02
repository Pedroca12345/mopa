import { useState } from "react";
import { type PartModel } from "../../models/PartModel";

import Papa  from "papaparse";

export function FileInput() {

  const [parts, setParts] = useState<PartModel[]>([]);

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;

    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];

    Papa.parse<PartModel>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setParts(results.data);
      }
    });
  }

  return (
    <input type="file" onChange={handleFileUpload} />
  )
}