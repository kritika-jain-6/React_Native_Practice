import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GridDynamic = () => {

    const users=[
        {
            id: 1,
            name: "Taylor"
        },
        {
            id: 2,
            name: "Anna"
        },
        {
            id: 5,
            name: "Robert"
        },
        {
            id: 10,
            name: "Louis"
        },
        {
            id: 12,
            name: "Sejal"
        },
        {
            id: 8,
            name: "Ariana"
        },
        {
            id: 33,
            name: "Tom"
        },
        {
            id: 10,
            name: "Gracie"
        },
        {
            id: 78,
            name: "Belly"
        }
        // agar aur zyada elements ho toh scrollView add kar sakte hain jese map se list bnate huye kiya tha.
    ]

  return (

    <View>
        <Text style={{ fontSize: 30, color: 'red' }}>Grid with Dynamic Data</Text>
        <View style={{ flex:1, flexDirection: 'row',flexWrap: 'wrap' }}>
            {
                users.map((item)=><Text style={styles.item}>{item.name}</Text>)
            }
       
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
            textAlign: 'center'
        }
    })

export default GridDynamic;