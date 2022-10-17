import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./App.css";
import { locations } from "../src/locations";
import { LocationDetails } from "../src/components/LocationDetails";
function App() {
  return (
    <>
      <MapContainer
        center={[50.8476, 4.3572]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => {
          return (
            <Marker position={[loc.long, loc.lat]}>
              <Popup>
              <LocationDetails location={loc}/>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}

export default App;
