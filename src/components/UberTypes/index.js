import React, { useState } from 'react';
import { Text, View, Pressable, TouchableOpacity, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import UberTypeRow from '../UberTypeRow'
import firestore from '@react-native-firebase/firestore'


const UberTypes = ({typeState}) => {
    
    const [selectType, setSelectType] = typeState
    const [amount, setAmount] = useState(0)

    const navigation = useNavigation()

    const confirm = () =>{
        console.warn("conforù")
    }

    const showAmount = async () =>{
        const course = JSON.parse(await AsyncStorage.getItem('newCourse'))
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        const duration = JSON.parse(await AsyncStorage.getItem('duration'))
        const distance =  JSON.parse(await AsyncStorage.getItem('distance'))
        const position = JSON.parse(await AsyncStorage.getItem('position'))
        

        let heure = Math.ceil(course?.heure/60)
        let amout = 0
        
        if(course?.heure > 5 && course?.heure < 22)
            if(course?.type == "cource")
                amout = heure * 2000
            else
                if(Math.ceil(distance) <= 8)
                    amout = 2500
                else
                    amout = 2500 + (100 * (Math.ceil(distance) - 8))
        else
            if(course?.type == "cource")
                amout = heure * 2500
            else
                if(Math.ceil(distance) <= 8)
                    amout = 3000
                else
                    amout = 3000 + (200 * (Math.ceil(distance) - 8))
            
        setAmount(amout)

        const newCourse = {
           destination: position?.destination, 
           origin: position?.origin,
           duration,
           distance,
           user,
           type: course?.type,
           heure: course?.heure,
           engage: false,
           driver: '',
           amount: amout,
           id: ''
        }

        console.log(newCourse)
     
        firestore().collection('courses').add(newCourse).then(
           (res) => {
                
            firestore().doc(`courses/${res.id}`).update({
                id: res.id
            }).then(()=>{
                navigation.navigate('Home')
                window.alert("nous alons vous choisir un chauffeur parmis notre liste de chauffeurs \n Voutre course coutera : " + amout +"fcfa")
            })

           }
        )
    }


    return(
        <View>
            <UberTypeRow 
                source={'UberX'} 
                type={"Dépot"} 
                description={"Vous ramene à votre destination"} key={0}
                isSelected = {"Dépot" === selectType}
                onPress={()=>{
                    setSelectType("Dépot")
                    try{
                        AsyncStorage.setItem("newCourse", JSON.stringify({type: 'depot', heure: new Date().getHours()}))
                    }catch(e){}
                }}
            />
            <UberTypeRow 
                source={'UberXL'} 
                type={"course"} 
                description={"Vous conduira jusqu'à votre destination"} key={1}
                isSelected = {"course" === selectType}
                onPress={()=>{
                    setSelectType("course")
                    try{
                        AsyncStorage.setItem("newCourse", JSON.stringify({type: 'cource', heure: new Date().getHours()}))
                    }catch(e){}
                }}
            />
            <TouchableOpacity onPress={showAmount} style={{
                backgroundColor: '#018786',
                padding: 15,
                margin: 10,
                alignItems: 'center',
                borderRadius: 5
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>Cofirmer votre Choix</Text>
            </TouchableOpacity>
        </View>
    )
};

export default UberTypes;
