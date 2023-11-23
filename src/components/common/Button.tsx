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

import { height, lg, md, sm } from '../../contants/Sizes';
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
import LinearGradientCustom from './LinearGradientCustom';

type TProps = { 
  label?: string;
  onPress?: () => any;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ label, onPress, style }: TProps) {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();




  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.touch, style]}
      onPress={onPress ? onPress : () => {}}
    >
      <LinearGradientCustom style={[styles.touchLinear]}>
        <Text style={styles.textTouch}>{label || 'Xác nhận'}</Text>
      </LinearGradientCustom>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchLinear: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: sm,
    paddingHorizontal: md * 2,
    borderRadius: 100,
  },
  touch: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: Colors.gray50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTouch: {
    fontSize: md,
    fontWeight: '700',
    color: Colors.black,
  }
});