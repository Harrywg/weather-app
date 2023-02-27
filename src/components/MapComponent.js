import React from 'react'
import { GOOGLE_MAPS_API_KEY } from '../api';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapStyle } from './mapStyle'


export default function MapComponent(props) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)

    }, [])

    return isLoaded ? (
        <GoogleMap
            id={'map'}
            center={{
                lat: props.coords[0],
                lng: props.coords[1]
            }}
            zoom={10}
            options={{
                disableDefaultUI: true,
                styles: mapStyle,
                draggable: false,
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}
        />
    ) : <div id={'map'}></div>
}



