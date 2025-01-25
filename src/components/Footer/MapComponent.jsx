/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

const MapComponent = () => {
  useEffect(() => {
    // Check if the map has already been initialized to avoid re-initialization
    if (document.getElementById("map")._leaflet_id) {
      return; // If the map is already initialized, return early
    }

    // Fix for missing marker icon images in production (Netlify)
    const defaultIcon = new L.Icon({
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images marker-icon.png", // URL for the default marker icon
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png", // URL for the retina marker icon
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // URL for the marker shadow
      iconSize: [25, 41], // Size of the marker
      iconAnchor: [12, 41], // Anchor position of the marker
      popupAnchor: [1, -34], // Position of the popup
      shadowSize: [41, 41], // Size of the shadow
    });

    // Initialize the map
    const map = L.map("map", {
      center: [-1.908585181820936, 30.06428949699932], // New coordinates for the center of the map
      zoom: 8, // Initial zoom level
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at the new location with the custom icon
    L.marker([-1.908585181820936, 30.06428949699932], { icon: defaultIcon })
      .addTo(map)
      .bindPopup("<b>Our Location</b><br>.")
      .openPopup();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      id="map"
      style={{
        height: "200px", // Adjust the height of the map
        width: "100%", // Make the map take the full width of its container
      }}
      className="lg:w-full w-[300%]" // Adjust the width for larger screens
    ></div>
  );
};

export default MapComponent;
