import { View, Text } from 'react-native';
import React from 'react';

const UserData = () => {
  return (
    <View>
      <Text style={ { fontSize: 25} }>Name: Dev</Text>;
      <Text style={ { fontSize: 25} }>Age: 25</Text>;
      <Text style={ { fontSize: 25  } }>email: test@gmail.com</Text>;
    </View>
  )
}

export default UserData;