import React from 'react'
import { View, Text } from 'react-native'

import HomeMap from '../../components/HomeMap'
import Covidmessge from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height: 400}}>
                <HomeMap/>
            </View>
            <Covidmessge/>
            <HomeSearch/>            
        </View>
        
    )
}

export default HomeScreen