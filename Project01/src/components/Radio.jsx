import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Radio = () => {
    const [selectedRadio,setSelectedRadio]=useState(2);
  return (
    <View style={styles.main}>
        {/* ab Touchable opacity me onPress event lga do */}
     <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {/* <View style={styles.radioBg}></View> */}
{/* ab yaha pr condition lagunga ki agar selectedRadio 1 hain toh yeh styling do */}
                {
                    selectedRadio===1?  <View style={styles.radioBg}></View> :null

                }
            </View>
            <Text style={styles.RadioText}>Radio 1</Text>
        </View>
        </TouchableOpacity>
        {/* radio button 2 */}
        <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
            {/* jese hum isko 2 daalenge iski value 2 ho jayegi(jispe click karungi voh true ho jayega) */}
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {/* ek time pr ek hi condition check hogi,agar radio ki value 1 hain toh upar vala check nhi toh niche vala */}
            {
                    selectedRadio===2?  <View style={styles.radioBg}></View> :null

                }
            </View>
            <Text style={styles.RadioText}>Radio 2</Text>
        </View>
        </TouchableOpacity>
    
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // justify content center me leh ayega screen ke
    },
    RadioText:{
        fontSize:20,
        color: 'orange',
        fontWeight: 'bold',
    },
    radio:{
        height:40,
        width: 40,
        borderColor: 'black',
        borderWidth:2,
        borderRadius: 20,
        // width ka half lena border radius
        margin:10,
    },
    radioWrapper:{
        flexDirection: 'row',
        alignItems :'center',
    },
    radioBg:{
        backgroundColor:'orange',
        // backgroundcolor wont work unless height and width given
        height: 28,
        width:28,
        borderRadius:20,
        // margin to get it in center
        margin: 4,

    },
})
export default Radio

// but hume chahte hain yeh ek button pr styling aye jab joh button selected hain toh uske liye usestate use karenges