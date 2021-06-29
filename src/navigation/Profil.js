import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Profil = (props) => (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 15}}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 10
          }}>
          <View style={{
            backgroundColor: '#c0c0c0',
            width: 70,
            height: 70,
            borderRadius: 50,
            marginRight: 10
          }}/>
          <Text style={{
            fontSize: 18
          }}>koudichrilo</Text>
        </View>
        
        <View>
          <Pressable onPress={()=>{console.warn('test')}}>
            <Text style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderTopColor: '#eee',
              borderBottomColor: '#eee',
              padding: 15
              }}>Messages</Text>
          </Pressable>
        </View>
      </View>

        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
);

export default Profil;
