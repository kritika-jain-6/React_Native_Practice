import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const touchevents = () => {
    const handlePress=()=>{
        alert('button Pressed');
    }
  return (
    <TouchableOpacity onPress={handlePress}>
        <Text>Press Me</Text>

    </TouchableOpacity>
  )
}

export default touchevents;