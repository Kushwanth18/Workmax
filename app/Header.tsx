import { View, Text,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='flex flex-row justify-between w-screen px-[50px] pt-[30px]'>
        <Image source={require('../assets/images/logo.png')} className='w-20' resizeMode='contain'></Image>
        <Image source={require('../assets/images/user.png')} className='w-12' resizeMode='contain'></Image>
    </View>
  )
}

export default Header
