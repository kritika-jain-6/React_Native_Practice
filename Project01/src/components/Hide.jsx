import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const Hide = () => {
    const [show,setShow]=useState(true);
    // agar by default hide hain onpress me true karke show kar sakte hain

  return (
    <View>
      <Text>Show/Hide Component</Text>
      {/* <Button title="Hide Component" onPress={()=>setShow(false)}/> */}
       <Button title="Toggle Component" onPress={()=>setShow(!show)}/> 

        {/* but agar chahte ho joh ahin uska opposite ho ek hi button me: Toggle(!show) toh hide/show hota rhaega */}

        {
            show? <User/>: null
        }
        {/* agar show hora hain toh user omponent call hoga otherwise null  */}
        
    </View>
  )
}

//ek component bnayenge
const User=()=>{
    return(
        <View>
            <Text style={{ fontSize:30,color: 'green'}}>User Component</Text>
        </View>
    )

}
export default Hide

// jese hi mene hide kiya yeh component ui se unmount hogya(basically ui se remove hogya)