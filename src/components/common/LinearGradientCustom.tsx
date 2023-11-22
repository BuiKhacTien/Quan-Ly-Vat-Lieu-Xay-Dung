import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type TProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

function LinearGradientCustom(props: TProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#ffffff', '#616161', '#3d3d3d', '#1a1a1a', '#000000', '#1a1a1a', '#3d3d3d', '#616161', '#ffffff']}
      style={[props.style]}
    >
      {props.children}
    </LinearGradient>
  )
}

export default LinearGradientCustom


const styles = StyleSheet.create({

});