import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

export default function If(props: PropsWithChildren<{is: boolean, style?: StyleProp<ViewStyle>}>) {
  if (!props.is) return <></>;
  return <View style={props.style}>{props.children}</View>;
}
