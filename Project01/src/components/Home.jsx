import React from "react";
import { View, Text } from "react-native";

const Home = (props) => {
    console.warn(props.route.params);

    const {name,age}=props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
{/* way to get details on home screen */}
      {/* <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Text style={{ fontSize:30 }}>Name:{props.route.params.name}</Text>
      <Text style={{ fontSize:30 }}>Name:{props.route.params.age}</Text> */}
{/* other way to get deatils using desctruring */}
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Text style={{ fontSize:30 }}>Name:{name}</Text>
      <Text style={{ fontSize:30 }}>Name:{age}</Text>
    </View>
  );
};

export default Home;
