import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'
// import { useNavigation } from '@react-navigation/core';
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

// const navigation = useNavigation() 

export const signIn = (email, password, navigation) =>{
   return auth().signInWithEmailAndPassword(email, password).then(
      res => {
         firestore().doc(`users/${res.user.uid}`).update({
            emailVerified: res.user.emailVerified
         })

         return true
      }
   ).catch(
      error => {
         window.alert(error.message)
         return false
      }
   )
}

// fonction pour reinisialiser le mot de passe
export const forgotPassword = (email) => {
   auth().sendPasswordResetEmail(email).then(() => {
      showToast('email de reinitialisation envoyé')
   }).catch(error => {
      window.alert(error)
   })
}
// fonction pour faire l'inscription
export const signUp = (user, image) => {
   let urlImage = 'Profils/' + (new Date()).getTime() + 'jpg'
   console.log(user)
   auth().createUserWithEmailAndPassword(user.email, user.password).then(
      (res) => {
         console.log('reussi');
         sendVerificationMail()
         res.user.updateProfile({
            displayName: user.displayName,
            photoURL: urlImage
         })

         const newUser = {
            uid: res.user.uid, 
            email: res.user.email, 
            displayName: user.displayName, 
            photoURL: urlImage,
            emailVerified: res.user.emailVerified
         }

         setUserDate(newUser)

         try{
            AsyncStorage.setItem('user', JSON.stringify(newUser))
         }catch(e){
            console.log('error')
         }
         
         uploadImage(image, urlImage)
      }
   ).catch(e=>{
      console.log(e.message)
   })
}

const showToast = (message) => {
   ToastAndroid.show(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
   )
}

const sendVerificationMail = async () => {
   return (await auth().currentUser).sendEmailVerification().then(() => {
      showToast('Nous vous avons envoyer un email de verification')
   })
}
// enregistrer une image
const uploadImage = async (image, url) => {
   try{
      await storage().ref(url).putFile(image)
   }catch(e){
      window.alert(e.message)
   }
}
// enregistrer les donnes de l'utilisateur
const setUserDate = (user) => {
   const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
   }

   firestore().doc(`users/${user.uid}`).set(userData, {merge: true})
}