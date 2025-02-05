import { View, Text } from 'react-native'
import React from 'react'
import Asyncst from './src/events/asyncst';
import Gestureevents from './src/events/gestureevents';
import Scrollevents from './src/events/scrollevents';
import Touchevents from './src/events/touchevents';

const App = () => {
  return (
    <View>
      <Asyncst/>
      <Gestureevents/>
      <Scrollevents/>
      <Touchevents/>
      
    </View>
  )
}

export default App