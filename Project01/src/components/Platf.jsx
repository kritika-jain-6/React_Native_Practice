import { View, Text,Platform,StyleSheet } from 'react-native'
import React from 'react'

const Platf = () => { 
  return (
    <View>
      <Text style={{ fontSize:30 }}>Platform: {Platform.OS} </Text>
      {/* ab ma chahti hu agar ios hai toh red color ka background ho otherwise green */}
      {
        Platform.OS==="android"?
        <View style={{ backgroundColor:'green',height:100,width:100 }}></View>:
        <View style={{ backgroundColor:'red',height:100,width:100 }}></View>
      }
      {/* agar ma chahti hu iss text box pr platform ke acc styling ho but iski styling stylesheet me denge */}
      <Text style={styles.text}>Hello Developer!!</Text>

{/* isme bahut kuch show hota hain versions minor,relaese evreything,testing,brand ,manufacturer etc */}
      {/* <Text style={{ fontSize:20, marginTop:10}}>{JSON.stringify(Platform)}</Text> */}
{/* now to see react native version */}
      {/* <Text style={{ fontSize:20, marginTop:10}}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text> */}

{/* agar specific vesrion dekhna hain */}
      <Text style={{ fontSize:20, marginTop:10}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        color: Platform.OS==="android"? 'orange':'blue',
        fontSize:20,
        marginTop: 10,

    }
})
export default Platf