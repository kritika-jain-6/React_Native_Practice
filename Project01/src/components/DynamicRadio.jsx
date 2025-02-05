import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React, {useState} from 'react'

const DynamicRadio = () => {
    const skills=[
        {
            id:1,
            name: "JAVA",
        },
        {
            id:2,
            name: "JS",
        },
        {
            id:3,
            name: "PHP",
        },
        {
            id:4,
            name: "Node",
        },
    ]
    // jab hum iske upar loop chalaye toh 4 radio button banke aa jane cahhiye
 
const [selectedRadio,setSelectedRadio]=useState(1);
  return (
    <View style={styles.main}>
        {
            // data pr map lgao aur map ke andar touchableopacity purane ki tarah daal do aur index will be key of touchable opacity
            skills.map((item,index)=> <TouchableOpacity 
            
            key={index}
            onPress={()=>setSelectedRadio(item.id)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                // agar selectedRadio item.id ke equal hain tabhi yeh style apply hoga otherwise nhi
                                selectedRadio===item.id?  <View style={styles.radioBg}></View> :null
            
                            }
                        </View>
                        <Text style={styles.RadioText}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>)
        }
       
     
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

    

export default DynamicRadio