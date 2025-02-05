import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const asyncst = () => {
    const [user,setUser]=useState('');
    const setData=async()=>{
        await AsyncStorage.setItem("user","Kia")

    }
    const getData=async()=>{
        const name=await AsyncStorage.getItem("user")
        // console.warn(name)
        setUser(name)
    }
    const removeData=async()=>{
        await AsyncStorage.removeItem("user")
        // console.warn(name)
        setUser('')
    }


    return (
    <View>
      <Text style={{fontSize:25, fontWeight:'bold'}}> Async Storage in React Native|{user}</Text>
      <Button title=' Set Data' onPress={setData}/>
      <Button title=' Get Data' onPress={getData}/>
      <Button title=' Remove Data' onPress={removeData}/>
    </View>
  )
}

export default asyncst