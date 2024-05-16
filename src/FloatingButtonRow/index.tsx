import cn from "classnames";

import { FloatingButton } from "../FloatingButton";
import { Icon } from "../Icon";

import styles from "./row.module.css";

export function FloatingButtonRow() {
  return (
    <div className={styles.row}>
      <div className={cn(styles.top, styles.buttons)}>
        <FloatingButton>
          <Icon name="navigate-outline" />
        </FloatingButton>
        <FloatingButton>
          <Icon name="compass-outline" />
        </FloatingButton>
      </div>
      <div className={cn(styles.bottom, styles.buttons)}>
        <FloatingButton>
          <Icon name="location-outline" />
        </FloatingButton>
      </div>
    </div>
  );
}
