import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

function Map() {
    const mapStyles ={
        height: '58vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 19.425435, lng: -99.122123
    }
    return(
        <LoadScript googleMapsApiKey=''>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}>
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
