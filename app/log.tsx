import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Header from '@/components/Header'
import { useFonts ,Alexandria_400Regular } from '@expo-google-fonts/dev'

export default class log extends Component {
  render() {
    return (
      <View className='bg-[#313638] min-h-full'>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({})