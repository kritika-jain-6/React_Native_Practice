import { View, Text ,StyleSheet, FlagList } from 'react-native'
import React from 'react'

const CompoFlagList = () => {

    const users=[
        {
            id: 1,
            name:"Peter",
            email: "peter@gmail.com"  
        },
        {
            id:2,
            name:"Angelina",
            email: "angel@test.com"
        },
        {
            id: 3,
            name: "Tom",
            email: "tom@xyz.com"
        }

    ]
  return (
    <View>
      <Text style={{ fontSize: 27 }}>Component in loop with FlagList</Text>
      <FlagList
      data={users}
    //   renderItem={ ({item})=><Text>{item.name}</Text>}
    // but hum chahte hain ki name,id ,email 3 ek saath mile toh wrapper banana padega,view use karenge aur uske andar text

    renderItem={ ({item})=><View>
        <Text>{item.name}</Text>  
        <Text>{item.email}</Text>
        {/* abhi name aur email alag line me ara hain,iss css se thik kar denge  */}
    </View>}
    //  ma chahta hun yeh data kisi aur component se nikal kr aye,isse nhi.
      />

    </View>
  )
}

const styles=StyleSheet.create({
    item:{
        fontSize:24,
        color: 'orange',
        flex:1,
        margin: 2,
        textAlign: 'center',
    },
    box:{
        // this styling is for view
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10
    }

})


export default CompoFlagList