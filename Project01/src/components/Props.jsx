import { View, Text , Button  } from 'react-native'
import React, { useState } from 'react'

// First Component: Props Example 1
const Props = () => {
    let name="Taylor";
  return (
    <View>
      <Text style={ { fontSize: 32  } }>Props in React</Text>
      <User name={"Swift"}/>

    </View>
  )
};

// User Component(i.e child component) (for Props Example 1)
const User=(props)=>{
    // console.warn(props); yeh object return karega name:swift ese
    return(
        <View style={ { backgroundColor: 'green', padding: 5} }>

        <Text style={ { fontSize: 30 } }>{ props.name } </Text>
        {/*  props.name ab name dega: swift  */}
        </View>
    )
}

//  Props Example: when passing variable instaed of static 

// const Props1= () => {
//     let name="Taylor";
//   return (
//     <View>
//       <Text style={ { fontSize: 32  } }>Props example 2: </Text>
//       <User name={name}/>   
//       {/* agar vraible pass karen,instaed of static (now we will get taylor) */}

//     </View>
//   )
// };


// Props Example 2:  with state
//if i want to update prop,then:

const Props2=()=>
{
  // hume varibale ko update karna hain toh,hum state ka use karenge
const [name,setName]=useState("Peter")

  return(
    <View>
      <Text style={ { fontSize: 30 } }>Props example 2: </Text>
      <Button title='Update Props' onPress={ ()=> setName("Pan") }/>
        {/* when button is pressed,instaed of peter Pan will be there. */}
        <User name={ name }/>
    </View>
  );
};

//Example 3: when we pass multiple props:

const Props3=()=>{
  const [name,setName]=useState("One Direction")

  return(
    <View>
      <Text style={ { fontSize: 30 } }>Props example 3:</Text>
      <Button title="New Updated Prop" onPress={ ()=> setName("ColdPlay")}/>
      <User1 name={ name } age={ 21 }/>
    </View>
  );
};

const User1=(props)=>{
  return(
    <View style={ { backgroundColor: 'red', padding: 5} }>
      <Text style={ { fontSize: 30 } }>Name: {props.name} </Text>
      <Text style={ { fontsize: 30 } }>Age: {props.age}</Text>

    </View>
  );

};


export { Props, Props2, Props3, User, User1  };
