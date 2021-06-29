import React from 'react';
import { Text, View } from 'react-native';

//import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/core';

const SearchResults = (props) => {
    
    const route = useRoute()

    const {originPlace, destinationPlace} = route.params

    return( 
        <View style={{display: 'flex'}} >
            <View style={{height: 400}}>
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>
            
            <UberTypes/>
        </View>
    )
};

export default SearchResults;
