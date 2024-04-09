import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';



const libraries = ["places"]
function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_EMAIL_API_KEY ,
    libraries
  });
  // This returns while map is being loaded
  if (!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap
      zoom={9}
      center={{ lat: -38.072261747305355, lng: 145.12459758465982 }}
      mapContainerClassName='map-container'
    >
      <MarkerF position={{ lat: -38.072261747305355, lng: 145.12459758465982 }} />

    </GoogleMap>
  )
}

export default Map;
