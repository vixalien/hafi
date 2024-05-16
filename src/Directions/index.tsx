import { useDirection } from "./hook";

import styles from "./directions.module.css";

export function Directions() {
  const direction = useDirection();

  if (!direction) return;

  const { start_address, end_address, next_stop } = direction;

  return (
    <div className={styles.directionsBox}>
      <h2>
        {prettyAddress(start_address)} - {prettyAddress(end_address)}
      </h2>
      <p>Next stop: {prettyAddress(next_stop.address)}</p>
      <div className={styles.inline}>
        <p>Distance: {next_stop.distance}</p>
        <p>Time: {next_stop.time}</p>
      </div>
    </div>
  );
}

/**
 * Returns an address pretty printed by returning only the name of the
 * location
 *
 * @example "Nyabugogo Taxi Park, KK2323 St., Kigali Rwanda" to "Nyabugogo Taxi Park"
 */
function prettyAddress(address: string) {
  return address.split(",")[0];
}
