import { View, Text,Button, FlatList ,StyleSheet } from 'react-native'
import React from 'react'

const List = () => {
  const users=[
    // hum variable ki jagah state bhi use kr sakte hain.
    {
      // object bnaya kiske andar id aur name bnaya hain
      // (array ke andar basically objects bna rhe hain)
      id: 1,
      name: "Shefali"
    },

    {
      id: 2,
      name: "Sam"
    },
    {
      id: 3,
      name: "Ayushi"
    },
    {
      id: 4,
      name: "Sahil"
    },
    {
      id: 10,
      name: "Peter"
    },
    {
      id: 55,
      name: "Kavisky"
    },
    {
      id: 99,
      name: "Jullitee"
    },
    {
      id: 62,
      name: "Rahul"
    },
    {
      id: 27,
      name: "Ruby"
    },
    {
      id: 6,
      name: "Peter"
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
  ]
  return (
    <View>
      <Text style={{ fontSize: 28, color: 'darkred' }}>List with Flag List components</Text>
      <FlatList
      data={ users }
      renderItem={ ({item})=><Text style={ styles.item }> {item.name}</Text>}
      keyExtractor={item=>item.id}
      // iska use hum scroll me pta lagega(baad me)

  />
    </View>
  )
}

const styles=StyleSheet.create({
  item:{
    fontSize: 24,
    padding: 10,
    color: "#fff",
    backgroundColor: 'black',
    borderColor: 'pink',
    borderWidth: 3,
    margin: 10

  }
});

export default List;