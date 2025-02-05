import React, {useState} from "react";
import { View, Text, Button,TextInput } from "react-native";

const Login = (props) => {
    // const name="Shefali";
    // for dynamic data we will be using useState
    const [name,setName]=useState("");
    const age=21;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>

{/* for dynamic data: */}
<TextInput
style={{ fontSize:25,borderColor: '#000',borderWidth:2,marginTop:10,marginBottom:10 }}
onChangeText={(text)=>setName(text)} placeholder="Enter name"

/>

      {/* <Button title="Go to Home Page" onPress={() => props.navigation.navigate("Home",{name:"shefu",age:22})} /> */}
        {/* for default  value can do in these 2 ways: */}
        {/* <Button title="Go to Home Page" onPress={() => props.navigation.navigate("Home",{name:name,age:age})} /> */}
        {/* other way: */}
        <Button title="Go to Home Page" onPress={() => props.navigation.navigate("Home",{name,age})} />
    </View>
  );
};

export default Login;
