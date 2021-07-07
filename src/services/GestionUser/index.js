import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

export const getUserImage = async (url) => {
   return await storage().ref(url).getDownloadURL()
}

export const updateUser = (user) =>{
   let urlImage = 'Profils/' + (new Date()).getTime() + 'jpg'

   firestore().doc(`users/${user.uid}`).update({
      displayName: user.displayName,
      photoUser: urlImage,
      phone: user.phoneNumber
   }).then(res => {
      uploadImage(user.image, urlImage)
   })
}

const uploadImage = async (image, url) => {
   try{
      await storage().ref(url).putFile(image)
   }catch(e){
      window.alert(e.message)
   }
}
// recupere un utilisateur
export const getUser = async () =>{
   console.log(JSON.parse(await AsyncStorage.getItem('user')))
}

export const showAmount = (houre, typeTransaction) =>{
   if(houre.getTime()){

   }
}