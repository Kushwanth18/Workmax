import { Text, View ,Image } from 'react-native'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <View className='flex flex-row justify-between px-10 min-w-full items-center py-10'>
        <Image source={require('../assets/images/logo.png')} className='w-20 h-20' style={{resizeMode:'contain'}}></Image>
        <Image source={require('../assets/images/user.png')} className='w-12 h-12' style={{resizeMode:'contain'}}></Image>
    </View>
    )
  }
}

export default Header