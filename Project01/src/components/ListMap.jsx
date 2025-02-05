import { View, Text,StyleSheet,Button, ScrollView } from 'react-native'
import React from 'react'

const ListMap = () => {
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
        },
        {
            id: 48,
            name: "Jermey"
          },
          {
            id: 37,
            name: "Bob"
          },
          {
            id: 51,
            name: "twigger"
          },
          {
            id: 16,
            name: "Ammy"
          },
          {
            id: 33,
            name: "Zafar"
          },
          {
            id: 8,
            name: "Noggy"
          },
          {
            id: 32,
            name: "Emma"
          },
          {
            id: 47,
            name: "Zubby"
          }
        //  so i need scrollView component so that i can see items below(as map function does not automatically scrolls)
    ]
  return (
    <View>
      <Text style={{ fontSize: 30,color: 'darkred' }}>List with Map Function</Text>
      <ScrollView>
      {
        users.map((item)=><Text style={ styles.item }>{item.name}</Text>)

      }
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    item:{
        fontSize: 24,
        padding: 10,
        color: '#fff',
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: 3,
        margin: 10
    }

})

export default ListMap;