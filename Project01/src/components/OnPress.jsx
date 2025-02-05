import { Button,View, Text } from 'react-native'
import React from 'react'

const OnPress= () => {
  let data=100;

  const fruits=(val)=>{
    data=20;
    console.warn(data);
  }
  return (
    
    <View>
      <Text style={ { fontSize: 32 } }>Button and OnPress Event</Text>

      <Text style={{ fontSize: 32 } }> { data} </Text>
      
  
      <Button title="OnPress" onPress={ ()=> fruits("Hello shafuu") } color={ 'red' }/> 

      {/* <Button title="OnPress" OnPress={ ()=> fruits() } color={ 'red' }/> */}

      <Button title="OnPress Button 2" onPress={ fruits } color={ 'green' }/>  
    </View>
  )
};

export default OnPress;