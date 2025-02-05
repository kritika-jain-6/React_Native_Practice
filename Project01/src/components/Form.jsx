import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Form = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [display,setDisplay]=useState(false);
    // means initally kuch nhi dikhaega

    const resetFormData=()=>{
        // phele saari states khali karo

        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");
    }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple Form in React Native</Text>
      <TextInput
      style={ styles.textInput }
      placeholder="Enter User Name"
      onChangeText={ (text)=>setName(text) }
      value={ name }
    //   value isliye liya hain taaki jab clear karen name toh textinput se bhi clear ho jayen.
      />

      <TextInput
      style={ styles.textInput}
      placeholder="Enter User Email"
      onChangeText={(text)=>setEmail(text)}
      value={ email }
      />

    <TextInput
      style={ styles.textInput}
      placeholder="Enter User Password"
     //  hum jab password likh rhe hain toh voh show rha hain as it,but we want *** ese ayen,so we will use:
      secureTextEntry={ true }

      onChangeText={(text)=>setPassword(text)}
      value={ password }
      />


      <View style={{ marginBottom: 10 }}>
      <Button color={ "green" } title="Print Details"
      onPress={ ()=>setDisplay(true) } />

      {/* print deatils button click karne pr saari details aa jayegi */}
      {/* reset ke liye ek function bnate hain jisse sara data clear ho jayega
       */}
      </View>
      <Button title="Clear Details" onPress={ resetFormData} />

{/* jese hi button pr click karo na toh unki state ki valuse dikhni chaiye,toh uske liye ek aur state leni padegi */}
{/* toh sabse phele uske liye view lunga taaki sare text dikah sako */}

<View>
    {
        display? 
        // means agar display ki value true hain toh view ki value dikaho, otheriws null
        <View>
            <Text style={{ fontSize: 18 }}>User Name : {name} </Text>
            <Text style={{ fontSize: 18 }}>User Email : {email} </Text>
            <Text style={{ fontSize: 18 }}>User Password : {password} </Text>
        </View>
        : null
    }

</View>
    </View>
  )
};

const styles=StyleSheet.create({
    textInput:{
        fontSize: 18,
        color:  'grey',
        borderWidth: 10,
        borderColor: 'grey',
        margin: 10
    }
})

export default Form;