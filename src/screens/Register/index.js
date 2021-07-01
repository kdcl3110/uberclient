import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import styles from './styles';



const Register = ({
    params,
}) =>{ 
   return (
    <View style={styles.container}>
         <View style={styles.group}>
            <Text>Nom*</Text>
            <TextInput
               style={styles.input}
               placeholder={'nom'}/>
         </View>

         <View style={styles.group}>
            <Text>email*</Text>
            <TextInput
               style={styles.input}
               placeholder={'Email'}/>
         </View>

         <View style={styles.group}>
            <Text>Mot de passe*</Text>
            <TextInput 
               style={styles.input}
               placeholder={'Mot de passe'}
               secureTextEntry={true}/>
         </View>

         <Pressable style={styles.button}>
            <Text style={{color: '#fff'}}>S'inscrire</Text>
         </Pressable>
         
         <View style={styles.foot}>
            <Pressable>
               <Text style={styles.text}>Mot de passe oublié</Text>
            </Pressable>
            <Pressable>
               <Text style={styles.text}>Inscription</Text>
            </Pressable>
         </View>
    </View>
   );
}

export default Register;

