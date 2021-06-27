import React from 'react';
import { Text, View } from 'react-native';

//import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';


const SearchResults = (props) => {
    return( 
        <View style={{display: 'flex'}} >
            <View style={{height: 400}}>
                <RouteMap/>
            </View>
            
            <UberTypes/>
        </View>
    )
};

export default SearchResults;
