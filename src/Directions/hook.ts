import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import env from "../env.json" assert { type: "json" };

export function useDirection() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState<
    google.maps.DirectionsService
  >();
  const [directionsRenderer, setDirectionsRenderer] = useState<
    google.maps.DirectionsRenderer
  >();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const route = routes[0];
  const leg = route?.legs[0];

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

  if (!leg) return null;

  return {
    start_address: route.legs[0].start_address,
    end_address: route.legs[route.legs.length - 1].end_address,
    next_stop: {
      address: leg.end_address,
      distance: leg.distance?.text,
      time: leg.duration?.text,
    },
  };
}

/**
 * Converts from an array of [latitude, longitude] to an object with the `lat`
 * and `lng` coordinates
 */
function coordsToLatLng(coords: number[]) {
  return { lat: coords[0], lng: coords[1] };
}
