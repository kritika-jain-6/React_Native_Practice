import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'

const PressAb = () => {
  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>console.warn('normal on press')}
      onLongPress={()=>console.warn("Long Press")}
      onPressIn={()=>console.warn("press in")}
      onPressOut={()=>console.warn("press Out")}
      >
        <Text style={styles.pressableBtn}>Press me</Text>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',

    },
    pressableBtn:{
        backgroundColor:'lightblue',
        color: 'white',
        fontSize: 20,
        padding: 10,
        margin:10,
        borderRadius:10,
        textAlign:'center',
        shadowColor: 'red',
        elevation: 5,

    }
})
export default PressAb