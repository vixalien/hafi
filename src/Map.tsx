import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import env from "./env.json" assert { type: "json" };

export function HafiMap() {
  const position = { lat: 30.0, lng: -2 };

  return (
    <APIProvider apiKey={env.KEY}>
      <Map defaultCenter={position} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}
