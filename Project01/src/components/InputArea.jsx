import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const InputArea= () => {
  // ab hum state use karenge:
  const [name,setName]=useState("");

  return (
    <View>
      <Text style={ { fontSize: 30 } }>Handle Text Input</Text>
      <Text style={ { fontSize: 30 } }>Your name is : {name} </Text>
      <TextInput
      style={ styles.textInput }
      // using inline css:
      // style={{ fontSize: 18, color: 'red', borderWidth: 2, borderColor: 'red',margin: 10 }}
      placeholder="Enter Your Name"

      value= { name }
// ab isse naam inputare se bhi hatt jayega
      onChangeText={ (text)=>setName(text)}
      //ab isse voh bhi ma textinput me phone se likhungi voh your name is me ayega,but agar yeh hta do tab esa nhi hoga
      />

      {/* but agar aapk chahte ho ki ek button ho jispe aap click karo toh inputText clear ho jayen. */}
      <Button title="Clear Input Value" onPress={ ()=> setName('')}/>
        {/* humne setName ko clear kar diya, but isse sirf upar ka naam chnage hoga,textinput pr naam fir bhi rahega , toh iske andar vali value bhi name hi rakhni padegi,state */}
    </View>
  )
};

// using internal css:

const styles=StyleSheet.create({
  textInput:
  { 
    fontSize: 18, 
    color: 'blue', 
    borderWidth: 2, 
    borderColor: 'blue',
    margin: 10 }

});

export default InputArea;