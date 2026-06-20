import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function IndiaMap() {
  return (
    <MapContainer
      center={[22.9734, 78.6569]}
      zoom={5}
      minZoom={4}
      maxZoom={18}
      scrollWheelZoom={true}
      style={{
        height: "600px",
        width: "100%",
        border: "5px solid red",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Kolkata */}
      <CircleMarker
        center={[22.5726, 88.3639]}
        radius={12}
        pathOptions={{
          color: "red",
          fillColor: "red",
          fillOpacity: 1,
        }}
      />

      {/* Delhi */}
      <CircleMarker
        center={[28.6139, 77.2090]}
        radius={12}
        pathOptions={{
          color: "green",
          fillColor: "green",
          fillOpacity: 1,
        }}
      />
    </MapContainer>
  );
}