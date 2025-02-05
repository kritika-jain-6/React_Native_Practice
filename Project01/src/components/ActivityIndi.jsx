import { View, Text,ActivityIndicator,StyleSheet,Button } from 'react-native'
import React , {useState} from 'react'

const ActivityIndi = () => {
    const [show,setShow]=useState(false);

    const displayLoader=()=>{
        setShow(true);

        // ma chahti hu 3 sec baad loader na aye(maanlo api fetch kar rhe ho 3 sec baad voh fetch hogya so you dont want the loader)

        setTimeout(()=>{
            setShow(false);
        },5000);
    }

  return (
    <View style={styles.main}>
        {/* agar aur size bada chahiye toh no daal skate hain direct like 40 or anything */}
      {/* <ActivityIndicator size={'large'}/> */}
      {/* <ActivityIndicator size={200} color="red"/> */}
      {/* hide karne ke liye ek property hoti hain: animating */}

      {/* <ActivityIndicator size={200} color="red" animating={false}/> */}
      {/* it will hide,if true then button will be showned */}

      {/* <ActivityIndicator size="small" color="red"/>
      <ActivityIndicator size={100} color='green'/> */}

      {/* ma chahti hun ki button ke click pr yeh visbile hon by default yeh hide rahe */}
{/* hide karne ke bhi 2 tareeke the */}


{
    show? <ActivityIndicator size='large' color='red'/>: null
}
{/* Other way to hide: */}

<ActivityIndicator size={100} color='green' animating={show}/>
<Button title='show loader' onPress={displayLoader}/>

         
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',

    }
})
export default ActivityIndi;