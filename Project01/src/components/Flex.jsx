import { View, Text,StyleSheet,Button,useWindowDimensions } from 'react-native'
import React from 'react'


const Flex = () => {
    const{width, height} = useWindowDimensions();

  return (
    <View style={styles.main}>
        <Text style = {[styles.box1 , {width : width *0.4 , height : height *.5}]}></Text>
        <View style = {styles.container}>
            <Text style = {[styles.box2 , {width : width *0.4 , height : height *.4}]}> </Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1,    
    },

    box1:{
        
        backgroundColor:'lightblue',     
        marginLeft:10,   
    },
    box2:{    
        backgroundColor:'lightpink',  
    },
    container : {
        flex : 1 ,
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    }

})
export default Flex


