import { useEffect } from "react";
import { MainMenu } from "../MainMenu";

import axios from "axios";
import { FileInput } from "../FileInput";



export function Home() {

  const token = localStorage.getItem("token");

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
      <FileInput/>
    </>
  )
}