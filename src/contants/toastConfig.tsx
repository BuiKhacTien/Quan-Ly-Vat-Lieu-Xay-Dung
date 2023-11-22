import {Text, View} from 'react-native';
import React from 'react';
import {BaseToast, ErrorToast, ToastConfig} from 'react-native-toast-message';
import {lg, md, sm, xl} from './Sizes';
import Icon from 'react-native-vector-icons/Ionicons';
import {Center} from 'native-base';
import Colors from './Colors';

const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: md,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: sm,
        fontWeight: '400',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: lg,
      }}
      text2Style={{
        fontSize: sm,
      }}
      renderLeadingIcon={() => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Icon
            color={Colors.error}
            size={1.5 * xl}
            name="close-circle-outline"></Icon>
        </View>
      )}
    />
  ),

  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export default toastConfig;
