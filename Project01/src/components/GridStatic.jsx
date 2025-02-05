import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const GridStatic = () => {
  return (
    <View>
      <Text style={{ fontSize: 30,color: 'red'}}>Grid with static Data</Text>
      <View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap' }}>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       <Text style={ styles.item }>Sam</Text>
       
       {/*  yeh by deafult top to bottom ate hain(column is that) ,row: from left to right */}
       {/* wrap: Items wrap onto the next line if there's not enough space and flex: 1 jitna space hain utna le sakta hain)
        */}

        {/* agar wrap property na hote toh tab space khatam hoti toh baaki elements chip jaate) */}
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    item:{
        fontSize: 25,
        backgroundColor: 'blue',
        color: "#fff",
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        //  vertically center me aya hain,ab text center me karna padega
        textAlign: 'center'
    }
})

export default GridStatic