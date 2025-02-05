import { View, Text, StyleSheet, Image  } from 'react-native'
import React from 'react'
import ExStyles from './Style'

// Stylling example 1: Using inline and internal css
const Styling = () => {
  return (
    <View>
        {/* using inline css  */}
      <Text style={ { fontSize: 30, color: 'white ', backgroundColor: 'dark blue'} }>Styling in React Native </Text>
      <Text style={ { fontSize: 30, color: 'white', backgroundColor: 'dark blue'} }>Styling in React Native </Text>
      <Text style={ { fontSize: 30, color: 'white', backgroundColor: 'dark blue'} }>Styling in React Native </Text>
      
      <Text style={ { fontSize: 25} }>Styling using Internal CSS  </Text>

      <Text style={ styles.textBox }>Styling in React Native</Text>
      <Text style={ styles.textBox }>Styling in React Native</Text>
      <Text style={ styles.textBox }>Styling in React Native</Text>

      {/* External styling  */}
      <Text style={ ExStyles.textBox }>Styling: External CSS  </Text>
      
      {/* using 2 styling for one component  */}
      <Text style={ [ styles.textBox, ExStyles.textBox ] }>Using multiple styling </Text>
{/* agar iske saath ab normal styling i.e inline styling bhi karni hain you can do it */}

<Text style={ [ styles.textBox, ExStyles.textBox, { marginTop: 20 } ] }>multiple styling example: 2 </Text>
    </View>
  );
};

const styles=StyleSheet.create({
    textBox:
    {
        color: '#fff',
        fontSize: 28,
        backgroundColor: 'pink',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'center',
        // to get in center vertically
        textAlign: 'center',
        // to get in center horizontally(directly use textAlign)
        borderColor: 'white',
        borderWidth: 3
        //  bcoz if we don't give borderwidth then bordercolor will not work(as by default borderwidth 0)



    }

});


// Styling example 2
const Styling1=()=>{
    return(
        <View style={ customStyles.container}>
            <Text style={ customStyles.text}>Doing Styling Examples  </Text>
        </View>

    );
};

const customStyles=StyleSheet.create({
    // can take any variable name with const here

    container: {
        backgroundColor: 'lightblue',
        padding: 20
    },

    text:{
        fontSize: 30,
        color: 'darkblue'
    }

});


// Styling example 3: Applying styling to image

const Styling2=()=>{
    return(
        <View style={ { 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
        } }>
            <Image
            // source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            source={ require('../assets/images/example1.jpg') }
            style={ { width: 300, height: 300, margin: 20} }
            
            />
        </View>

    );
};

// Internal styling for image
const Styling3=()=>{
    return(
        <View style={ styles1.container }>
            <Image
            source={ require('../assets/images/example2.jpg') }
            style={ styles1.image }
            />
        </View>
    );
};

const styles1=StyleSheet.create({
    container:{
        alignItems: 'center',
        // to center the iamge
        margin: 20
    },

    image:{
        width: 250,
        height: 220,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'green',

    },
});



export { Styling, Styling1, Styling2, Styling3 };


