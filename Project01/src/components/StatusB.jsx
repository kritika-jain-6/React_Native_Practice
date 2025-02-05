// import { View, Text,StatusBar,StyleSheet,Button} from 'react-native'
// import React, {useState} from 'react'

// const StatusB = () => {
//     const [hide,setHide]=useState(false);
//     const [barStyle,setBarStyle]=useState("default");

//   return (
//     <View style={styles.container}>
//         <StatusBar
//         backgroundColor='orange'
//         // barStyle="default"
//         // idhar ab barstyle ke andar default ki jagah barStyle daaldo
//         barStyle={barStyle}
//         // hidden={false}  hide kardo ab
//         hidden={hide}
//         />
// {/* ab state ke hissab se chnage karna chahte ho */}
// {/* yeh onpress toggle karega i.e agar show hain toh vide and vice a versa */}
//     <Button title='Toggle Status Bar' onPress={()=>setHide(!hide)}/>
//     <Button title='Update Status Bar' onPress={()=>setBarStyle("dark-content")}/>
//         {/* yeh dar-content toggle(opposite)nhi hoga kyuki humne toggle kiya nhi iske liye if-else lagegi */}
    
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//     }
// })
// export default StatusB


// if want to toggle setbarStyle aslo then:

import { View, Text,StyleSheet,StatusBar,Button } from 'react-native'
import React ,{useState} from 'react'

const StatusB = () => {
    const [hide,setHide]=useState(false);
    const [barStyle,setBarStyle]=useState("default");
    
    const updateBarStyle=()=>{
        // Toggle between "light-content" and "dark-content"
     setBarStyle((prevStyle)=>
        prevStyle==='dark-content'? 'light-content': 'dark-content'
    );
     };

  return (
    <View style={styles.container}>
            <StatusBar
            backgroundColor='orange'
            barStyle={barStyle}
            hidden={hide}
           />

<Button title='Toggle Status Bar' onPress={()=>setHide(!hide)}/>    
    <Button title='Update Status Bar' onPress={updateBarStyle}/>
       
         </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    }
})

export default StatusB

