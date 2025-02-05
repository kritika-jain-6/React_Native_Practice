import { View, Text,Modal,StyleSheet,Button} from 'react-native'
import React, {useState} from 'react'

const Dialog = () => {
    // modal show aur hide karne ke liye usestate use karenge

    const [showModal,setShowModal]=useState(false);


  return (
    <View style={styles.main}>
        {/* by default hide karne ke liye modal me ek property hoti hain: visible karke isme showMOdal daal do */}
        <Modal
        transparent={true}
        visible={showModal}
        // animation ke liye ek property hain animationType
        animationType='slide'
        >
  {/* yeh view wrapper ki tarh kaam karega */}
            <View style={styles.centeredView}>

                {/* yeh view text control karega */}
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello Developer!!</Text>
                    {/* close modal pr clikck karne pr modal band ho jayen toh isme setshowmodal false kardo*/}
                    <Button title="Close Modal" onPress={()=>setShowModal(false)}/>
                </View>
            </View>
        </Modal>
        <View style={styles.buttonView}>
            {/* joh hmara button hain uske press hone pr setmodal ko true set kar denge */}
            <Button title="Open Modal" onPress={()=>setShowModal(true)}/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
    },
    buttonView:{
        flex:1,
        justifyContent: 'flex-end'

    },
centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
},
modalView:{
    // background color yeh text ke liye ahin
    backgroundColor:'white',
    padding:30,
    bordeRadius:20,
    shadowColor: 'red',
    elevation: 5,
 
},
modalText:{
    fontSize:30,
    marginBottom: 20,
}
})

export default Dialog