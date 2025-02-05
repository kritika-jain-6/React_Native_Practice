// useEffect for unmount lifecycle:
import { View, Text,Button } from 'react-native'
import React, {useState,useEffect} from 'react'

const Unmount = () => {
    const [show,setShow]=useState(true);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>useEffect for Unmount Component</Text>
      <Button title="Toggle" onPress={()=>setShow(!show)}/>
        {
            show? <Student/>:null
        }
    </View>
  )
}

const Student=()=>{
    // timer lga do

    let timer=setInterval(()=>{
        console.warn("Timer called");
    },2000)
    // normal useEffect unmount pr kaam nhi karta(voh mount pr kaam karega but unmount pr nhi,toh iske andar ek return karo aur uske andar function bna do)
    // useEffect(()=>{
    //     return()=>{ console.warn("useEffect called on unmount")}
    // })

    // ab jese hi unmount hoga toh timer ko hta denge(taaki memory na kahe)
    useEffect(()=>{
        return()=> clearInterval(timer)
    })
    return(
        <View>
            <Text style={{ fontSize:30,color:'red'}}>Student</Text>
        </View>
    )
}

//  jab show nho hoga tab unmount vala call hoga using useEffect
export default Unmount