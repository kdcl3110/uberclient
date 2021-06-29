import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/destinationSearch';
import SearchResults from '../screens/searchResults';



const Stack = createStackNavigator();

export default function HomeNavigation() {
   return (
      <Stack.Navigator screenOptions={{
         headerShown: false
      }}
      >
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="DestinationSearch" component={DestinationSearch}/>
         <Stack.Screen name="SearchResults" component={SearchResults}/>
      </Stack.Navigator>      
   )
}
