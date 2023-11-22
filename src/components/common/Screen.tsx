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
} from 'react-native';
import React, {PropsWithChildren, useCallback, useEffect, useRef, useState} from 'react';
import Colors from '../../contants/Colors';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';

import {height} from '../../contants/Sizes';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useAppDispatch } from '../../store/hooks';
import { $reset } from '../../store/actions';
import { useAppNavigation } from '../../screens/AppNavigator';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../assets';
import Header, { THeaderProps } from './Header';

export default function Screen(
  props: PropsWithChildren<
    {
      statusBar?: StatusBarProps;
      style?: StyleProp<ViewStyle>;
      footer?: React.ReactNode;
      headerShown?: boolean;
      source?: ImageSourcePropType;
      fullscreen?: boolean;
      isNoAuth?: boolean;
    } & THeaderProps
  >,
) {
  const navigation = useAppNavigation()
  const dispatch = useAppDispatch()
  const {isNoAuth = false} = props;
  const [loading, setLoading] = useState(false);
  const statusBarStyle = props.statusBar || {backgroundColor: Colors.status};
  const isFocused = useIsFocused();
  const [visible] = useKeyboardStatus();
  const insets = useSafeAreaInsets();

  return (
    <View style={[props.style, {flex: 1}]}>
      {props.source && <Background source={props.source} />}
      {isFocused && <StatusBar barStyle={'dark-content'} backgroundColor={Colors.blackO5} translucent={true} {...props.statusBar}></StatusBar>}
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: Colors.background, paddingTop: insets.top}}>
        {props.headerShown && <Header {...props} />}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : (null as any)}
          style={[{flex: 1, overflow: 'hidden'}, props.style]}>
          {props.children}
        </KeyboardAvoidingView>
        {props.footer}
        <HideWithKeyboard>
          <View style={{height: visible || props.fullscreen ? 0 : 50}} />
        </HideWithKeyboard>
      </View>
    </View>
  );
}


const Background = React.memo((props: any) => {
  return <FastImage resizeMode='stretch' style={[StyleSheet.absoluteFill]} source={props.source || IMAGES.background1jpeg} />;
});
