import { Boxes, UsersIcon } from "lucide-react";
import { User } from "../User";
import { Logo } from "../Logo";

import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";


export function MainMenu() {
  return (
    <header className={styles.header}>
      <Logo
        size="normal"
        line="false"
      />
      <User />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <RouterLink href="/home">
            <li>
              <Boxes />
              <p>Peças e locações</p>
            </li>
          </RouterLink>
          <RouterLink href="/home">
            <li>
              <UsersIcon />
              <p>Usuários</p>
            </li>
          </RouterLink>
        </ul>
      </nav>
    </header>

  )
}