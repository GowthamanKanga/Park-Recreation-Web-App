import React, { useRef, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const parks = [
  {
    name: "High Park",
    location: "Toronto, ON",
    id: 1,
    lat: 43.653208,
    lng: -79.463415,
  },
];

const ParkMap = ({ google }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center: { lat: 43.653208, lng: -79.463415 },
    });

    parks.forEach((park) => {
      const marker = new google.maps.Marker({
        position: { lat: park.lat, lng: park.lng },
        map,
        title: park.name,
      });
    });
  }, [google]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Map
        google={google}
        initialCenter={{ lat: 43.653208, lng: -79.463415 }}
        ref={mapRef}
        style={{ height: "300px", width: "300px" }}
      >
        {parks.map((park) => (
          <Marker
            key={park.id}
            position={{ lat: park.lat, lng: park.lng }}
            title={park.name}
          />
        ))}
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "key here",
})(ParkMap);
