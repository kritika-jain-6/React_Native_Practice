import { View, Text,StyleSheet,Button} from 'react-native'
import React, {useState} from 'react'

const CustomDialog = () => {
    // state use karenge modal ke liye
    const [show,setShow]=useState(false);
  return (
    // ab view lenge modal ke liye
    <View style={styles.container}>
        {
            show?
            <View style={styles.modal}>
    <View style={styles.body}>
        <Text>Some Text</Text>
        {/* close pr hide karne ke liye setShow false krdo */}
       <Button title="Close" onPress={()=>setShow(false)}/>
    </View>
    </View>:null

        }
       
    <Button title="Open Dialog" onPress={()=>setShow(true)}/>
    </View>

  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(50,50,50,.5)',
        // yeh puri screen ko yeh background color dega
        justifyContent: 'center',
        alignItems: 'center',
    },
body:{
    backgroundColor: 'rgba(145, 145, 247, 0.5)',
    height:300,
    width:300,
    padding:20,
    justifyContent: 'flex-end',
    borderRadius:10,
}
})

export default CustomDialog