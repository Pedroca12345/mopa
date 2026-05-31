import { useEffect } from "react";

import axios from "axios";
import styles from "./styles.module.css";
import { Logo } from "../Logo";

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
    <header className={styles.header}>
      <Logo />
    </header>
  )
}