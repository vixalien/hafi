import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import env from "./env.json" assert { type: "json" };

export function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState<
    google.maps.DirectionsService
  >();
  const [directionsRenderer, setDirectionsRenderer] = useState<
    google.maps.DirectionsRenderer
  >();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    console.log("here");

    directionsService
      .route({
        origin: coordsToLatLng(env.navigation.start),
        destination: coordsToLatLng(env.navigation.end),
        travelMode: google.maps.TravelMode.DRIVING,
        // TODO: set to false
        provideRouteAlternatives: true,
        waypoints: env.navigation.stops.map((stop) => {
          return {
            location: coordsToLatLng(stop),
            stopover: true,
          };
        }),
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>
        {prettyAddress(selected.legs[0].start_address)} -{" "}
        {prettyAddress(selected.legs[selected.legs.length - 1].end_address)}
      </h2>
      <p>Next stop: {prettyAddress(leg.end_address)}</p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Time: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={route.summary}>
              <button onClick={() => setRouteIndex(index)}>
                {route.summary}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Converts from an array of [latitude, longitude] to an object with the `lat`
 * and `lng` coordinates
 */
function coordsToLatLng(coords: number[]) {
  return { lat: coords[0], lng: coords[1] };
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
