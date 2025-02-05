import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview';

// to open website on phone
const Web = () => {
  return (
    <WebView source={{ uri: "https://dribbble.com/tags/react-native" }}/>
  )
}

export default Web