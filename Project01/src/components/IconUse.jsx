import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const IconUse=()=>{
  return (
    <View style={styles.container}>
      {/* Display an icon */}
      <Icon name="home" size={50} color="blue" />

      {/* Add a label below the icon */}
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default IconUse;
