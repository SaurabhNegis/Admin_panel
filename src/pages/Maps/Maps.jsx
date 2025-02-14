import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";
import { Button, Box } from "@mui/material";

const Maps = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapType, setMapType] = useState("roadmap");
  const [streetViewPosition, setStreetViewPosition] = useState(null);
  const mapRef = useRef(null); // To hold map reference
  const panoramaRef = useRef(null); // To hold StreetView reference

  const locations = [
    { lat: 40.748817, lng: -73.985428, title: "Empire State Building" }, // Marker 1
    { lat: 40.689247, lng: -74.044502, title: "Statue of Liberty" }, // Marker 2
  ];

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const defaultCenter = { lat: 40.748817, lng: -73.985428 };

  useEffect(() => {
    if (window.google && mapRef.current) {
      const map = mapRef.current;

      locations.forEach((location) => {
        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          position: location,
          map: map,
          title: location.title,
        });

        marker.addListener("click", () => {
          setSelectedLocation(location);
        });
      });
    }
  }, []);

  useEffect(() => {
    if (streetViewPosition && panoramaRef.current) {
      const panorama = new window.google.maps.StreetViewPanorama(panoramaRef.current, {
        position: streetViewPosition,
        pov: { heading: 165, pitch: 0 },
      });
    }
  }, [streetViewPosition]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyD9GBr4eMFnz30uynthY_nvn6g6miexuco">
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={13}
          mapTypeId={mapType}
          ref={mapRef}
        >
          {/* InfoWindow for selected location */}
          {selectedLocation && (
            <InfoWindow
              position={selectedLocation}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h3>{selectedLocation.title}</h3>
                <p>Some details about this location.</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>

        {/* Map Type Controls */}
        <Box sx={{ marginTop: "10px", textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => setMapType("roadmap")}
          >
            Roadmap
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => setMapType("satellite")}
          >
            Satellite
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => setMapType("hybrid")}
          >
            Hybrid
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => setMapType("terrain")}
          >
            Terrain
          </Button>
        </Box>

        {/* Street View Panorama */}
        <div
          id="street-view"
          style={{ marginTop: "20px", width: "100%", height: "400px" }}
          ref={panoramaRef} // Set the ref for StreetView container
        />

        {/* Button to Trigger Street View */}
        <Box sx={{ marginTop: "10px", textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() =>
              setStreetViewPosition({
                lat: 40.689247, // Statue of Liberty
                lng: -74.044502,
              })
            }
          >
            Open Street View of Statue of Liberty
          </Button>
        </Box>
      </div>
    </LoadScript>
  );
};

export default Maps;
