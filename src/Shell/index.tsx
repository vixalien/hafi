import { ReactNode } from "react";

import styles from "./shell.module.css";

export function Shell({ children }: ShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.bar}>
        <nav className={styles.navigation}>
          <div>menu</div>
          <button>Startup</button>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.bar}>
        <ul className={styles.navigation}>
          <li>Heart</li>
          <li>Info</li>
          <li>Bell</li>
        </ul>
      </footer>
    </div>
  );
}

export interface ShellProps {
  children: ReactNode;
}
