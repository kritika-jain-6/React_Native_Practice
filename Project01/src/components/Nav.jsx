// Navigation.js
import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";

const Stack = createNativeStackNavigator();

const btnAction = () => {
  alert("Left Button Pressed");
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "",
            headerLeft: () => <Button title="Left" onPress={btnAction} />,
            headerRight: () => <Header />,
            headerStyle: { backgroundColor: "lightblue" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

















//full code for Stack navigation with all compoenents in this only:


// import { View, Text,Button,TextInput} from 'react-native';
// import React, {useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // will use createNativeStackNavigator this as a function
// const Stack=createNativeStackNavigator();

// const btnAction=()=>{
//   // console.warn("btn pressed");
//   alert("Left Button Pressed");
// }
// const Nav= () => {
//   return (
//     <NavigationContainer>
// <Stack.Navigator 
// screenOptions={{
//   headerStyle:{
//     backgroundColor: 'red',
//   },
//   headerTintColor:'white',
//   headerTitleStyle:{
//     fontSize: 25
//   }
// }}
// >
//   {/* agar ek screen pr alag chaiye toh uspe alag se styling dedo options me jaake aur baaki agar bahut saari pr same style dena hain unki styling Stack navigator me daaldo */}
// <Stack.Screen name='Login' component={Login} 
// options={{
//   // headerTitle: ()=><Button title='Left'/>,
//   // for me,it's not giving the button left,it's giving in center
//   headerTitle: "",
//   // keeping headetTitle empty bcoz know dont want title just the button
//   headerLeft: ()=><Button title='Left' onPress={btnAction}/>,
//   // isme text bhi,kuch bhi le sakte hain)
//   // headerLeft: ()=><Text>Hello</Text>,

//   // ab button right side chahiye(title hta ke button dono thik se chalenge)
//   // ab ma chahti hu right side pr button nhi kuch aur ayen ki component Hearder naam ka niche banya hain mene

//   headerRight: ()=><Header/>,
//   // headerRight: ()=><Button title='Right'/>,

//   //isme ese hi same way ab text bhi de sakte hain right side pr
//   title: "User Login",
//   headerStyle:{ 
//     backgroundColor: 'lightblue',
//   },
//   headerTintColor:'white',
//   // basically title(heading) ka color change karne ke liye
//   headerTitleStyle:{
//     fontSize: 30
//   }
//   // but ma chahti hu jese hi ma home screen pr jao toh uspe bhi same ho,toh iske liye screen navigator me yeh code daal denge aur option ko screenOptions kar denge aur title screen option me nhi dete(back button ka bhi coor same aas title color ho jayega)
// }}

// />
// <Stack.Screen name='Home' component={Home}/>

// {/* <Stack.Screen name='Login' component={Login}></Stack.Screen> */}
// {/* hume login vala component phele cahhiye toh usse utha ke home ke upar kar diya */}
// </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const Header=()=>{
//   return(
//     //  can use anyting if dont want button like text textinput anything
//     <TextInput placeholder='name'/>
//     // then can enter any name
//     // <Button title='btn'/>

//   )
// }
// const Home=()=>{
//   return(
//     <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{ fontSize:30 }}>Home Screen</Text>
//     </View>
//   )
// }

// const Login=(props)=>{
//   return(
//     <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{ fontSize:30 }}>Login Screen</Text>
//       <Button title="Go to Home Page" onPress={()=> props.navigation.navigate("Home")}/>
//     </View>
//   )
// }

// // ma chahti hu ma lgin screen ke button pr click kar kar home screen pr cahli jao,toh phele button bnayenge login screen me hum
// export default Nav;






























































// yeh stack navigation aur uski styling ka code hain:

// import { View, Text,Button} from 'react-native';
// import React, {useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // will use createNativeStackNavigator this as a function
// const Stack=createNativeStackNavigator();

// const App= () => {
//   return (
//     <NavigationContainer>
// <Stack.Navigator 
// screenOptions={{
//   headerStyle:{
//     backgroundColor: 'red',
//   },
//   headerTintColor:'white',
//   headerTitleStyle:{
//     fontSize: 25
//   }
// }}
// >
//   {/* agar ek screen pr alag chaiye toh uspe alag se styling dedo options me jaake aur baaki agar bahut saari pr same style dena hain unki styling Stack navigator me daaldo */}
// <Stack.Screen name='Login' component={Login} options={{
//   title: "User Login",
//   headerStyle:{
//     backgroundColor: 'lightblue',
//   },
//   headerTintColor:'white',
//   // basically title(heading) ka color change karne ke liye
//   headerTitleStyle:{
//     fontSize: 25
//   }
//   // but ma chahti hu jese hi ma home screen pr jao toh uspe bhi same ho,toh iske liye screen navigator me yeh code daal denge aur option ko screenOptions kar denge aur title screen option me nhi dete(back button ka bhi coor same aas title color ho jayega)
// }}

// />
// <Stack.Screen name='Home' component={Home}/>

// {/* <Stack.Screen name='Login' component={Login}></Stack.Screen> */}
// {/* hume login vala component phele cahhiye toh usse utha ke home ke upar kar diya */}
// </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const Home=()=>{
//   return(
//     <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{ fontSize:30 }}>Home Screen</Text>
//     </View>
//   )
// }

// const Login=(props)=>{
//   return(
//     <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{ fontSize:30 }}>Login Screen</Text>
//       <Button title="Go to Home Page" onPress={()=> props.navigation.navigate("Home")}/>
//     </View>
//   )
// }

// // ma chahti hu ma lgin screen ke button pr click kar kar home screen pr cahli jao,toh phele button bnayenge login screen me hum
// export default App;








