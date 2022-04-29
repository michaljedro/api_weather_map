import React, { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Box } from "./UI/Box";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_KEY ||
  "pk.eyJ1IjoibWljaGFsam90IiwiYSI6ImNsMmtsajl5ZTA0bzczYm5rYTB1bGRwZzIifQ.o56wH2gTdlyrDAG8ICbSzQ";

interface MapProps {
  lng: number;
  lat: number;
}

export const Map: React.FC<MapProps> = ({ lat: lngProp, lng: latProp }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(lngProp);
  const [lat, setLat] = useState(latProp);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (mapRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);
  return <div id="map-container" className="map-container" />;
};
