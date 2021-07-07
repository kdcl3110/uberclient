import React from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'

const HomeSearch = (props) => {

    const navigation = useNavigation()

    const gotToSearch = () =>{
        navigation.navigate('DestinationSearch')
    }

    return (
        <View>
            {/*input box */}
            <TouchableOpacity onPress={gotToSearch} style={styles.inputBox }>
                <Text style={styles.inputText}>Ou êtes vous?</Text>
                
                <View style={styles.timeContainer }>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text>Maintenant</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons>
                </View>
            </TouchableOpacity>

            {/*previous destination */}    
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            {/*Home destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={20} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
        
    )
}

export default HomeSearch