import React from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './styles';

import UberTypeRow from '../UberTypeRow'

const UberTypes = (props) => {
    const confirm = () =>{
        console.warn("conforù")
    }
    return(
        <View>
            <UberTypeRow 
                source={'UberX'} 
                type={"Dépot"} 
                description={"Vous ramene à votre destination"} key={0}
            />
            <UberTypeRow 
                source={'UberXL'} 
                type={"course"} 
                description={"Vous conduira jusqu'à votre destination"} key={1}
            />
            <Pressable onPress={confirm()} style={{
                backgroundColor: 'black',
                padding: 20,
                margin: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>Cofirmer votre Choix</Text>
            </Pressable>
        </View>
    )
};

export default UberTypes;
