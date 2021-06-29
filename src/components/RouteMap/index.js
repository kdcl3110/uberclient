import React from 'react'
import { View, Text, Image } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';


const RouteMap = ({origin, destination}) => {

    //const origin = {latitude: 37.3318456, longitude: -122.0296002};
    //const destination = {latitude: 37.771707, longitude: -122.4053769};
    
    const originLoc = {
        longitude: origin.details.geometry.location.lgn,
        latitude: origin.details.geometry.location.lat,
    }
    const destLoc = {
        longitude: destination.details.geometry.location.lgn,
        latitude: destination.details.geometry.location.lat,
    }
    
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAGEWYmloTFMMFmvN8arxfxASoSY73RH48';

    return (
        <MapView
            style={{width:'100%', height:'100%'}}
            provider= {PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />
            <Marker
                coordinate={originLoc}
                title={'origin'}
            />
            <Marker
                coordinate={destinationLoc}
                title={'destination'}
            />
        </MapView>
    )
}

export default RouteMap