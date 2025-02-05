import { View, Text, PanResponder } from 'react-native'
import React, { useState } from 'react'

const gestureevents = () => {
    const [pan,setPan]=useState({x:0,y:0});
    const panResponder=useRef(
        PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder:()=>true,
            onPanResponderMove:(e,gesture)=>{
                setPan({x:gestureState.moveX,y:gestureState.moveY});
            },
            onPanResponderRelease:()=>{
                console.log('Gesture Ended');
            },
        })
    ).current;
  return (
    <View {...panResponder.panHandleres} style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>Move Your Finger</Text>
      <Text>Position:{`x:${pan.x}, y:${pan.y}`}</Text>
    </View>
  )
}

export default gestureevents