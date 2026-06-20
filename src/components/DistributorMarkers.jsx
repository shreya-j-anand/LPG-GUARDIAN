import { CircleMarker, Popup } from "react-leaflet";
console.log("DistributorMarkers Loaded");
const distributors = [
  {
    id: 1,
    name: "IOC Kolkata",
    state: "West Bengal",
    district: "Kolkata",
    stock: 240,
    status: "Healthy",
    lat: 22.5726,
    lng: 88.3639,
  },
  {
    id: 2,
    name: "HPCL Delhi",
    state: "Delhi",
    district: "New Delhi",
    stock: 110,
    status: "Healthy",
    lat: 28.6139,
    lng: 77.2090,
  },
  {
    id: 3,
    name: "BPCL Mumbai",
    state: "Maharashtra",
    district: "Mumbai",
    stock: 40,
    status: "Low Stock",
    lat: 19.0760,
    lng: 72.8777,
  },
  {
    id: 4,
    name: "IOC Chennai",
    state: "Tamil Nadu",
    district: "Chennai",
    stock: 18,
    status: "Critical",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    id: 5,
    name: "HPCL Bengaluru",
    state: "Karnataka",
    district: "Bengaluru",
    stock: 175,
    status: "Healthy",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: 6,
    name: "BPCL Hyderabad",
    state: "Telangana",
    district: "Hyderabad",
    stock: 82,
    status: "Moderate",
    lat: 17.3850,
    lng: 78.4867,
  },
];

export default function DistributorMarkers() {
  return (
    <>
      {distributors.map((d) => (
        <CircleMarker
  key={d.id}
  center={[d.lat, d.lng]}
  radius={10}
  pathOptions={{
    color: "#00E08A",
    fillColor: "#00E08A",
    fillOpacity: 0.9,
    weight: 2,
  }}
>
          <Popup>
            <div style={{ minWidth: "220px" }}>
              <h3>{d.name}</h3>

              <hr />

              <strong>State</strong>

              <div>{d.state}</div>

              <br />

              <strong>District</strong>

              <div>{d.district}</div>

              <br />

              <strong>Current Stock</strong>

              <div>{d.stock} Cylinders</div>

              <br />

              <strong>Status</strong>

              <div>{d.status}</div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}