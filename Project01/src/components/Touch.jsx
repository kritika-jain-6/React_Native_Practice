import { View, Text,TouchableHighlight,StyleSheet } from 'react-native'
import React from 'react'

const Touch = () => {
  return (
    <View style={styles.main}>
        <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
        {/* agar kisi component ko ek se zyada style dena hain toh [] lete aur comma se usme style dtee hain */}
    </TouchableHighlight>
    <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
    </TouchableHighlight>
    <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Warning</Text>
    </TouchableHighlight>
    <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
    </TouchableHighlight>
        <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
    </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex: 1
    },
    button:{
        backgroundColor: 'lightgrey',
        color: 'black',
        fontSize:24,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius:5,
        // ab shadow denge
        shadowColor: 'red',
        // elevation se zyada ache se dikhaega
        elevation: 10,
        // opacity:.5,
        // opacity se thoda light hoga
    },
    success:{
        backgroundColor: 'green',
    },
    primary:{
        backgroundColor: 'lightblue',
        
    },
    warning:{
        backgroundColor: 'gold'
    },
    error:{
        backgroundColor: 'red',
    }

})

export default Touch