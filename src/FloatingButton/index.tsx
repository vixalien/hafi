import { ReactNode } from "react";

import styles from "./floating-button.module.css";

export function FloatingButton({ children }: FloatingButtonProps) {
  return (
    <div className={styles.floatingButton}>
      {children}
    </div>
  );
}

export interface FloatingButtonProps {
  children: ReactNode;
}
