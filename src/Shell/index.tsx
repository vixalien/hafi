import { ReactNode } from "react";

import styles from "./shell.module.css";
import { Icon } from "../Icon";

export function Shell({ children }: ShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.bar}>
        <nav className={styles.navigation}>
          <div>
            <Icon name="menu-outline" />
          </div>
          <button className={styles.startupButton}>Startup</button>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.bar}>
        <ul className={styles.navigation}>
          <li>
            <Icon name="heart-outline" />
          </li>
          <li>
            <Icon name="information-circle-outline" />
          </li>
          <li>
            <Icon name="notifications-outline" />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export interface ShellProps {
  children: ReactNode;
}
