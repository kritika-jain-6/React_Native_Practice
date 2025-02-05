import { View, Text } from 'react-native'
import React from 'react'

const name="Shafuu";
let age=22;
let email="abc@gmail.com";

function fruit()
{
    return "Cherry";
}


const JSX = () => {
  return (
    <View>
      <Text style={ { fontSize: 30 } }>JSX </Text>
      <Text style={ { fontSize: 28 } }>{name} </Text>
      <Text style={ { fontSize: 28 } }>{age} </Text>
      <Text style={ { fontSize: 28 } }>{email} </Text>
      <Text style={ { fontSize: 28 } }>{fruit()} </Text>
      <Text style={ { fontSize: 28 } }>{100*23} </Text>
      <Text style={ { fontSize: 28 } }>{ age===22? "above 20": "Unkown age"} </Text>

    </View>
  )
}

export default JSX