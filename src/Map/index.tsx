import { APIProvider, Map } from "@vis.gl/react-google-maps";

import env from "../env.json" assert { type: "json" };

import { Directions } from "../Directions";
import styles from "./maps.module.css";

export function HafiMap() {
  const position = { lat: 30.0, lng: -2 };

  return (
    <APIProvider apiKey={env.KEY}>
      <Map
        defaultCenter={position}
        defaultZoom={10}
        streetViewControl={false}
        zoomControl={false}
        fullscreenControl={false}
        className={styles.map}
      >
        <Directions />
      </Map>
    </APIProvider>
  );
}
