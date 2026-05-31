import { CircleUserRound } from "lucide-react";

import styles from "./styles.module.css";

export function User() {
  return(
    <div className={styles.user}>
      <CircleUserRound
        className={styles.userIcon}
        size={32}
      />
      <p>Admin</p>
    </div>
  )
}