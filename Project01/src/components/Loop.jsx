import { View, Text ,StyleSheet, FlatList} from 'react-native'
import React from 'react'

const Loop = () => {
    const users=[

        {
         
          id: 1,
          name: "Shefali",
          email:"abc@test.com"
        },
        {
          id: 2,
          name: "Sam",
          email:"abc@test.com"
        },
        {
          id: 3,
          name: "Ayushi",
          email: "xyz@test.com"
        },
        {
          id: 4,
          name: "Sahil",
          email: "xyz@test.com"
        },
        {
          id: 55,
          name: "Kavisky",
          email: "kavi@test.com"
        },
    ]
      return (
        <View>
          <Text style={{ fontSize: 28 }}>Component in Loop with FlatList</Text>
          <FlatList
          data={ users }
        
          renderItem={({item})=> <UserData item={item}/>}
      />
    </View>
      );
    };

const UserData=(props)=>{
    const item=props.item;
    return(
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
          </View>
    )
}

const styles=StyleSheet.create({
    item:{
        fontSize: 24,
        color: 'orange',
        flex: 1,
        margin:2,
        textAlign: 'center'
    },
    box:{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10
    }
})
  
export default Loop;










// import { View, Text ,StyleSheet, FlatList} from 'react-native'
// import React from 'react'

// const Loop = () => {
//     const users=[

//         {
         
//           id: 1,
//           name: "Shefali",
//           email:"abc@test.com"
//         },
//         {
//           id: 2,
//           name: "Sam",
//           email:"abc@test.com"
//         },
//         {
//           id: 3,
//           name: "Ayushi",
//           email: "xyz@test.com"
//         },
//         {
//           id: 4,
//           name: "Sahil",
//           email: "xyz@test.com"
//         },
//         {
//           id: 55,
//           name: "Kavisky",
//           email: "kavi@test.com"
//         },
//     ]
//       return (
//         <View>
//           <Text style={{ fontSize: 28 }}>Component in Loop with FlatList</Text>
//           <FlatList
//           data={ users }
//         //   renderItem={({item})=><View style={styles.box}>
//             {/* view isliye liye taaki name aur email dono dikhe 
//             <Text style={styles.item}>{item.name}</Text>
//             <Text style={styles.item}>{item.email}</Text>

//       //ab hum view el component me daalenge 
//           </View> */}
//           //ab render me userData me prop pass karenge item naam se

//           renderItem={({item})=> <UserData item={item}/>}
//       />
//     </View>
//       );
//     };

// const UserData=(props)=>{
//     const item=props.item;
//     return(
//         <View style={styles.box}>
//             <Text style={styles.item}>{item.name}</Text>
//             <Text style={styles.item}>{item.email}</Text>
//           </View>
//     )
// }

// const styles=StyleSheet.create({
//     item:{
//         fontSize: 24,
//         color: 'orange',
//         flex: 1,
//         margin:2,
//         textAlign: 'center'
//     },
//     box:{
//         flexDirection: 'row',
//         borderWidth: 2,
//         borderColor: 'orange',
//         marginBottom: 10
//     }
// })
  
// export default Loop;