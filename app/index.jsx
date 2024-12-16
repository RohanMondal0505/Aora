import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../constants'

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f' }}>
      <StatusBar style='auto'/>
      <Text>index</Text>
      <Image source={images.logo} />
    </SafeAreaView>
  )
}

export default index