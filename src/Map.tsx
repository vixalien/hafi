import { APIProvider, Map } from "@vis.gl/react-google-maps";

import env from "./env.json" assert { type: "json" };

import { Directions } from "./Directions";

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
      >
        <Directions />
      </Map>
    </APIProvider>
  );
}
