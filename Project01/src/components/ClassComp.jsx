import { View, Text, Button, TextInput } from 'react-native';
import React, { Component } from 'react';
import Student from './Student';

class ClassComp extends Component{

    // fruit=()=>{
    //     console.warn("cherry");
    // }

    // to use state in class component we create constructor:
    constructor()
    {
        super();
        this.state={
            name: "Anil",
            // age: 34,
        }
    }

    // function ko update state value
    // updateName()
    // {
    //     this.setState({name: "Hello"})
         // setState: ek by default function hota hain class component me to upadte state value
    // }

     //ab agr textinput vala same value state me chaiye
    updateName(val)
    {
        this.setState({name: val})
    }

    render()
    {
        return(
            <View>
                <Text style={{ fontSize: 30,color: 'red'}}>{this.state.name}</Text>
                {/* tog get multiple values */}
                {/* <Text style={{ fontSize: 30,color: 'red'}}>{this.state.name} {this.state.age}</Text> */}
                <TextInput placeholder="Enter your Name"
                // to upadte nam value:
                // onChangeText={()=> this.updateName()}

                //  ab agar ma chahati hun ki joh value textinpute me daalo vahi state me ayen: toh iske liye ek paramter nikalo text naam aur function me bhi ek paramter val naam ka
                onChangeText={(text)=> this.updateName(text)}

                />
                <Button title="Press Me"/>
                <Student/>
            </View>
        )
    }
}

export default ClassComp;
