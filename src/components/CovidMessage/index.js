import React from 'react'
import { View, Text } from 'react-native'

import HomeMap from '../../components/HomeMap'

import styles from './style'

const Covidmessge = (props) => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>travel only if necessary </Text>
            <Text style={styles.text}>help flatten  the curve. if you must travel , please exercise caution for your safe fafely and the safely of  our community</Text>
            <Text style={styles.learnMore}>learn more</Text>
        </View>
        
    )
}

export default Covidmessge