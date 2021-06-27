import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    SafeAreaView
} from 'react-native'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props)=>{
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setdestinationPlace] = useState(null)

    useEffect(()=>{
        if(originPlace && destinationPlace){
            console.warn('rediriger vers le résultat')
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details})
                        console.log(data, details);
                    }}

                    styles={{
                        textInput: styles.textInput
                    }}

                    fetchDetails
                    query={{
                        key: 'AIzaSyAGEWYmloTFMMFmvN8arxfxASoSY73RH48',
                        language: 'en',
                    }}
                />
                
                <GooglePlacesAutocomplete
                    placeholder='where to?'
                    onPress={(data, details = null) => {
                        setdestinationPlace({data, details})
                        console.log(data, details);
                    }}

                    styles={{
                        textInput: styles.textInput
                    }}

                    fetchDetails
                    query={{
                        key: 'AIzaSyAGEWYmloTFMMFmvN8arxfxASoSY73RH48',
                        language: 'en',
                    }}
                />      


            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch