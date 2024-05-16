import cn from "classnames";

import { FloatingButton } from "../FloatingButton";

import styles from "./row.module.css";

export function FloatingButtonRow() {
  return (
    <div className={styles.row}>
      <div className={cn(styles.top, styles.buttons)}>
        <FloatingButton>View</FloatingButton>
        <FloatingButton>Straighten</FloatingButton>
      </div>
      <div className={cn(styles.bottom, styles.buttons)}>
        <FloatingButton>Location</FloatingButton>
      </div>
    </div>
  );
}
