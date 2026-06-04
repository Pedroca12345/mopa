import { useEffect } from "react";
import { MainMenu } from "../MainMenu";
import { FileInput } from "../FileInput";
import { usePartContext } from "../../contexts/PartContext/usePartContext";

import axios from "axios";

export function Home() {

  const token = localStorage.getItem("token");

  const { parts } = usePartContext();

  async function fetchAPI() {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    try {
      await axios.get("http://localhost:3000/home", headers);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
  }

  useEffect(() => {
    fetchAPI();
  });
  
  return (
    <>
      <MainMenu />
      <FileInput />
    </>
  )
}