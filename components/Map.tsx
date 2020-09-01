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

const SimpleMap: React.FC<SimpleMapProps> = (props: SimpleMapProps) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={props.zoom}
      >
        <Marker
          position={props.center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default SimpleMap;