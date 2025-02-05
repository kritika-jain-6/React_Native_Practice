// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {

//     const [count,setCount]=useState(0);
//     useEffect( ()=>{
//         console.warn("Hello");
//     })


//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>Life Cycle with UseEffect</Text>
//       <Text style={{ fontSize: 25 }}>{count}</Text>
//       <Button title="Update Count" onPress={()=>setCount(count+1)}/>
//     </View>
//   )
// }

// export default Hooks;

// useEffect as componentDidMount:

// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {

//     const [count,setCount]=useState(0);
//     // useEffect for mounting phase
//     useEffect( ()=>{
//         console.warn("Hello");
//     },[])   
//     // passed empty array so that it get called only when component mounts(not when prop changes)
// // empty array pass karne se sirf componentDidMount ke case me chalega.

//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>useEfect as componentDidMount</Text>
//       <Text style={{ fontSize: 25 }}>{count}</Text>
//       <Button title="Update Count" onPress={()=>setCount(count+1)}/>
//     </View>
//   )
// }

// export default Hooks;






// useEFfect as componentDidUpdate:

// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     console.warn(count);
//   },[count]) 
//   // to use [] for componentDidUpdate (pass state inside it, on whcih you want useEffect to work on)
// // koi state pass kardo ki jab bhi voh state call hogi na tab useEffect chalega.

// //  ab bolege ki yeh count tabhi chalega jab count update hoga: jab save karne pr initally 0 pr bhi count show hora bcoz initially state apne aap update hoti hi hoti hain,chahe aap condition pass karo ya na karo 
// // component mount hone pr yeh by default maan rha hain ki state change hori hain.
// //  himne yeh dekha ki [] : isme state pass karne se iss basis pr state call hoga
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>useEffect as ComponentDidUpdate  {count} </Text>
//       <Button title="Update Counter" onPress={()=>setCount(count+1)}/>
//     </View>
//   )
// }

// export default Hooks;


//but ab isme yeh surity nhi hain ki agar ek aur state hoti toh yeh useEffect work karega ki nhi:

// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {

//   const[count,setCount]=useState(0);
//   const[data,setData]=useState(100);

//   useEffect(()=>{
//     console.warn(count);
//   },[count]) 

//   // humne basically useEffect sird count vali state pr call karya (update dono states hori hain but call useEffect pr specific state ko karaya) basically data ko call karne pr useEffect call nhi hoga
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>{data}  useEffect as ComponentDidUpdate  {count} </Text>
//       <Button title="Update Counter" onPress={()=>setCount(count+1)}/>
//       <Button title="Update Data" onPress={()=>setData(data+20)}/>
//     </View>
//   )
// }

// export default Hooks;



// ab maanlo 4 state aur aap chate ho useEffect 3 state pr chale(anything like this)
// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {
//   const[count,setCount]=useState(0);
//   const[data,setData]=useState(100);
//   const[name,setName]=useState("Shefalii");
//   const[age,setAge]=useState(23);

//   useEffect(()=>{
//     console.warn(count);
//   },[count,name,age]) 

//   // humne basically useEffect sird count vali state pr call karya (update dono states hori hain but call useEffect pr specific state ko karaya) basically data ko call karne pr useEffect call nhi hoga
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>{data}  useEffect as ComponentDidUpdate  {count} </Text>
//       <Button title="Update Counter" onPress={()=>setCount(count+1)}/>
//       <Button title="Update Data" onPress={()=>setData(data+20)}/>
//       <Button title="Update Name" onPress={()=>setName("Angell")}/>
//       <Button title="Update Age" onPress={()=>setAge(22)}/>
//     </View>
//   )
// }

// export default Hooks;

//using 2 useEffect(one for count other for data)
// import { View, Text,Button } from 'react-native'
// import React, { useEffect,useState } from 'react'

// const Hooks = () => {
//   const[count,setCount]=useState(0);
//   const[data,setData]=useState(100);
 
//   useEffect(()=>{
//     console.warn("do some animation");
//   },[count]);

//   useEffect(()=>{
//     console.warn("call some api")
//   },[data]);

//   // humne basically useEffect sird count vali state pr call karya (update dono states hori hain but call useEffect pr specific state ko karaya) basically data ko call karne pr useEffect call nhi hoga
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'red'}}>{data}  useEffect as ComponentDidUpdate  {count} </Text>
//       <Button title="Update Counter" onPress={()=>setCount(count+1)}/>
//       <Button title="Update Data" onPress={()=>setData(data+20)}/>
      
//     </View>
//   )
// }

// export default Hooks;


//agar props ko call karna hain:(basically specific prop ko call karna ho toh)

import { View, Text,Button } from 'react-native'
import React, { useEffect,useState } from 'react'

const Hooks = () => {
  const[count,setCount]=useState(0);
  const[data,setData]=useState(100);

  return (
    <View>
      <Text style={{ fontSize: 30, color: 'red'}}>{data}  useEffect as ComponentDidUpdate  {count} </Text>
      <Button title="Update Counter" onPress={()=>setCount(count+1)}/>
      <Button title="Update Data" onPress={()=>setData(data+20)}/>
        <User info={{ data,count }}/>
      
    </View>
  )
}

const User=(props)=>{

  useEffect(()=>{
    console.warn("run this code when data prop is updated");

  },[props.info.data]) 
  // toh basically hum chahte hain jab data update ho tab yeh console chale(lekin coun pr click krne pr nhi ana chahiye)
  useEffect(()=>{
    console.warn("run this code when count prop is updated");

  },[props.info.count]) 
  // this will run only when count prop changes

  return(
    <View>
      <Text style={{ fontSize: 30, color: "orange" }}>data: {props.info.data}</Text>
      <Text style={{ fontSize: 30, color: "orange" }}>count: {props.info.count}</Text>
    </View>
  )
}


export default Hooks;