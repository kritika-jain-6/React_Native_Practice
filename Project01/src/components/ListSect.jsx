import { View, Text,StyleSheet,SectionList } from 'react-native'
import React from 'react'

const ListSect = () => {
    const users=[
        // basically creating nested array
    {
        id: 2,
        name: "Sam",
        data: ["Java","JS","React","SQL"]
      },
      {
        id: 4,
        name: "Sahil",
        data: ["C","C++","Python"]
      },
      
      {
        id: 62,
        name: "Ammy",
        data: ["Java","Python","C"]
      },
    ]

  return (
    <View>
      <Text>Section List in React Native</Text>
      <SectionList
    //   sabse phele isme props lenge section naam ke:

    sections={users}  
    // jisme data lenge then render

    renderItem={({item})=><Text style={{ fontSize: 20,marginLeft: 20 }}>{item}</Text>}
    //   iske header print nhi hua; toh uske liye use use karna pdega
      renderSectionHeader={({section:{name}})=>(
        <Text style={{ fontSize: 25, color:'red' }}>{name}</Text>
      )}
      />
    </View>
  )
} 

export default ListSect