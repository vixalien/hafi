import { APIProvider, Map } from "@vis.gl/react-google-maps";

import env from "../env.json" assert { type: "json" };

import { Directions } from "../Directions";
import styles from "./maps.module.css";
import { FloatingButtonRow } from "../FloatingButtonRow";

export function HafiMap() {
  const position = { lat: 30.0, lng: -2 };

  return (
    <APIProvider apiKey={env.KEY}>
      <div className={styles.mapBox}>
        <Directions />
        <Map
          defaultCenter={position}
          defaultZoom={10}
          streetViewControl={false}
          zoomControl={false}
          fullscreenControl={false}
          mapTypeControl={false}
          className={styles.map}
        >
          <FloatingButtonRow />
        </Map>
      </div>
    </APIProvider>
  );
}
