import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../contants/Colors';

type TProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

function LinearGradientCustom(props: TProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[Colors.mainColor, Colors.green500, Colors.mainColor]}
      style={[props.style]}
    >
      {props.children}
    </LinearGradient>
  )
}

export default LinearGradientCustom


const styles = StyleSheet.create({

});