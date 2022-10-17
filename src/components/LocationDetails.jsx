import React from "react";
import { locations } from "../locations";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
export function LocationDetails({ location }) {
  return (
    <>
      <div>{location.name}</div>
      <p>{location.description}</p>
    </>
  );
}
