import {
  View,
  Text,
  StatusBar,
  StyleProp,
  ViewStyle,
  StatusBarProps,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StyleSheet,
  Animated,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import Colors from '../../contants/Colors';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';

import { height, lg, sm } from '../../contants/Sizes';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useAppDispatch } from '../../store/hooks';
import { $reset } from '../../store/actions';
import { useAppNavigation } from '../../screens/AppNavigator';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../assets';
import Header, { THeaderProps } from './Header';
import Icon from 'react-native-vector-icons/Ionicons';

type TProps = { name: string }

export default function Footer({ name }: TProps) {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();




  return (
    <View style={[styles.container]}>
      <View style={[name === 'Home' ? styles.viewBox1 : styles.viewBox2]}>
        <TouchableOpacity
          style={[styles.itemBox]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name={name === 'Home' ? 'home' : 'home-outline'} color={name === 'Home' ? Colors.mainColor : Colors.white} size={lg} />
          <Text style={[styles.name]}>Trang chủ</Text>
        </TouchableOpacity>
      </View>
      <View style={[name === 'Customer' ? styles.viewBox1 : styles.viewBox2]}>
        <TouchableOpacity
          style={[styles.itemBox]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Customer')}
        >
          <Icon name={name === 'Customer' ? 'person' : 'person-outline'} color={name === 'Customer' ? Colors.mainColor : Colors.white} size={lg} />
          <Text style={[styles.name]}>Khách hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={[name === 'Home' ? styles.viewBox1 : styles.viewBox2]}>
        <TouchableOpacity
          style={[styles.itemBox]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name={name === 'Home' ? 'home' : 'home-outline'} color={name === 'Home' ? Colors.white : Colors.mainColor} size={lg} />
          <Text style={[styles.name]}>Trang chủ</Text>
        </TouchableOpacity>
      </View>
      <View style={[name === 'Home' ? styles.viewBox1 : styles.viewBox2]}>
        <TouchableOpacity
          style={[styles.itemBox]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name={name === 'Home' ? 'home' : 'home-outline'} color={name === 'Home' ? Colors.white : Colors.mainColor} size={lg} />
          <Text style={[styles.name]}>Trang chủ</Text>
        </TouchableOpacity>
      </View>
      <View style={[name === 'Home' ? styles.viewBox1 : styles.viewBox2]}>
        <TouchableOpacity
          style={[styles.itemBox]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name={name === 'Home' ? 'home' : 'home-outline'} color={name === 'Home' ? Colors.white : Colors.mainColor} size={lg} />
          <Text style={[styles.name]}>Trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sm,
    backgroundColor: Colors.mainColor,
  },
  viewBox1: {
    padding: 3,
    backgroundColor: Colors.whiteO7,
    borderRadius: 10,
  },
  viewBox2: {

  },
  itemBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.whiteO8,
    borderRadius: 10,
  },
  name: {
    color: Colors.white,
    fontSize: sm,
  }
});