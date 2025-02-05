import { View, Text, FlatList } from 'react-native'
import React from 'react'

const data=['Item1','Item2','Item3','Item4'];
const scrollevents = () => {
    const handleScroll=(event)=>{
        console.log('Scrolled: ' ,event.nativeEvent.contentOffset.y);
    }
  return (
    <FlatList
    data={data} 
    renderItem={({item})=><Text>{item}</Text>}
    onScroll={handleScroll}/>
  )
}

export default scrollevents