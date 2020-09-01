import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 
const containerStyle = {
  width: '100%',
  height: '400px'
};

interface SimpleMapProps {
    center: object,
    zoom: number
};

const mapCenter = {
  lat: 47.0254538,
  lng: -91.6761874
};
 
const SimpleMap: React.FC<SimpleMapProps> = (props: SimpleMapProps) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={14}
      >
        <Marker
          position={mapCenter}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default SimpleMap;