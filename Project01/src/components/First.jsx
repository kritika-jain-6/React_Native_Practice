import { View, Text, Image, Button } from 'react-native';
import React from 'react';

const First = () => {
    const age=21;
  return (
    <View>
        <Text style={ { fontSize: 30 } }>Hello, Shefali here!!</Text>
      <Text style={ { fontSize:27 } }>Age is: {age} </Text>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
      style={{ width: 200,height: 200 }}
      />     
      <Button title="Press Me"/>
    </View>
  )
}

export default First;