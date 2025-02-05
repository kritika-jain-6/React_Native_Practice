import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Responsive = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        {/* iske andar multiple box bna rhi hun */}
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox2}></View>
        <View style={styles.InnerBox3}></View>
        {/* but hume yeh left to right cahiye  */}
      </View>
    
      
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>

    </View>
    
        
  )
}
// agar yeh sab row me chahiye toh top view me flex direction lga do
const styles=StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'row',
  },
  box1:{
    flex:2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  InnerBox1:{
    flex: 1,
    backgroundColor: 'pink',
    margin: 10,
    //  margin bcoz so that we know it is inside Box1

  },
  InnerBox2:{
    flex: 1,
    backgroundColor: 'lightpink',
    margin: 10,
  },
  InnerBox3:{
    flex: 1,
    backgroundColor: 'purple',
    margin: 10,
  },
  
  box2:{
    flex:1,
    backgroundColor: 'green',
  },
  box3:{
    flex:1,
    backgroundColor: 'blue',
  },
  box4:{
    flex:1,
    backgroundColor: 'yellow',
  },
})

export default Responsive