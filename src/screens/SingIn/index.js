import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';



const SignIn = ({
    params,
}) =>{ 
   return (
    <View style={styles.container}>
         <View style={styles.group}>
            <Text style={styles.text}>email*</Text>
            <TextInput
               style={styles.input}
               placeholder={'Email'}/>
         </View>

         <View style={styles.group}>
            <Text style={styles.text}>Mot de passe*</Text>
            <TextInput 
               style={styles.input}
               placeholder={'Mot de passe'}
               secureTextEntry={true}/>
         </View>

         <Pressable style={styles.button}>
            <Text style={{color: '#fff'}}>Connexion</Text>
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

export default SignIn;

