import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../contants/Colors';
import { md, xs, lg } from '../../contants/Sizes';


type TEmptyData = {
  color?: string;
  label?: string;
} 

export default function EmptyData(props: TEmptyData) {
  return (
    <View style={[styles.container]}>
      <Icon name="ban" style={[styles.icon, {color: props.color ? props.color : Colors.white}]}></Icon>
      <Text style={[styles.text, {color: props.color ? props.color : Colors.white}]}>{props.label ? props.label : 'Chưa có dữ liệu!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    padding: md,
  },
  icon: {
    padding: xs,
    fontSize: lg,
    color: Colors.white,
  },
  text: {
    padding: xs,
    fontSize: md,
    color: Colors.white,
    fontStyle: 'italic',
  },
});
