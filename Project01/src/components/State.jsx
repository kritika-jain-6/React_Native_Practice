import { View, Text, Button} from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [name,setName]=useState("Anjaliii");
    
    let data="Sahil";

    function testName()
    {
        setName("Siddhu");
        let data="Sanya";
    }

  return (
    <View>
      <Text style={ { fontSize: 30 } }>{ name }</Text>
      <Text style={ { fontSize: 30 } }>{ data }</Text>
      <Button title='Update Name' onPress={ testName}/>
    </View>
  )
};


const Counter=()=>{

  const [count,setCount]=useState(0);

  return(
    <View>
      <Text style={ { fontSize: 30 } }>Count: { count }</Text>
      <Button title="Increment" onPress={ ()=> setCount(count+1) } />

    </View>

  );
};

const Counter2=()=>{
  const [count,setCount]=useState(0);

  return(
    <View>
      <Text style={ { fontSize: 30 } }>Current count: { count }</Text>
      <Button title="Increase" onPress={ ()=> setCount(count+1)}/>
      <Button title="Decrease" onPress={ ()=> setCount(count-1)}/>
      <Button title="Reset" onPress={ ()=> setCount(0)}/>
              
    </View>

  );
};

const LightSwitch=()=>{
  const [isOn,setIsOn]=useState(false);

  return(
    <View>
      <Text style={ { fontSize:30, color: 'red' } }> The light is { isOn? 'On' : 'Off'}</Text>
    <Button title="Toggle Light" onPress={ ()=> setIsOn(!isOn)}/>

    </View>

  );

};


// Use Case: Allow users to switch between light and dark themes.

const ThemeToggler=()=>{
  const [isDarkMode,setIsDarKMode]=useState(false);

  return(
    <View style={ { backgroundColor: isDarkMode? '#000': '#fff', flex: 1 } } >
      <Text style={ { color: isDarkMode? '#fff' : '#000' } }>
        {isDarkMode? 'Dark Mode' : 'Light Mode'}
      </Text>
   <Button title="Toggle Theme" onPress={ ()=> setIsDarKMode(!isDarkMode) }/>
    </View>

  );
};

export { State, Counter, Counter2, LightSwitch, ThemeToggler };
