
import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons'

const HuberTypeRow = ({source, type, description}) => {
    
    const getImage = ()=>{
        if(source === 'UberX'){
            return require('../../assets/images/UberX.jpeg')
        }

        if(source === 'UberXL'){
            return require('../../assets/images/UberXL.jpeg')
        }
    }

    return(
        <View style={styles.container}>
            {/* image */}
            <Image 
                style={styles.image}
                source={ getImage() }
            />

            <View style={ styles.middelContainer }>
                <Text style={styles.type}>
                    { type }
                    <Ionicons name={'person'} size={12}/>
                </Text>
                <Text style={styles.desc}>{description}</Text>
            </View>

        </View>
    )
};

export default HuberTypeRow;
