import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import { useAppNavigation } from '../../screens/AppNavigator';
import { md, sm, xl } from '../../contants/Sizes';
import Colors from '../../contants/Colors';
import { TItemSelect } from '../../types/Types';
import SelectCustom from '../selects/Select';

const noti1 = require('../../../assets/images/Noti1.png');

export type THeaderProps = {
  title?: string;
  subTitle?: string;
  iconLeft?: string;
  onIconLeftPress?: () => any;
  iconStyle?: StyleProp<TextStyle>;
  iconRight?: string;
  onIconRightPress?: () => any;
  listItemSelect?: TItemSelect[];
  id?: string;
  setId?: React.Dispatch<React.SetStateAction<string>>;
};
export default function Header(props: THeaderProps) {
  const navigation = useAppNavigation();

  const defaultIconPress = () => {
    // navigation.navigate('Personal');
  };

  return (
    <View style={{ position: 'relative' }}>
      <View style={[styles.container]}>
        <View style={{ flex: 1 }}>
        { props.iconLeft ? (
              <TouchableOpacity onPress={props.onIconRightPress}>
                <Icon
                  style={[styles.icon, props.iconStyle]}
                  name={props.iconLeft}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ opacity: 0 }}>
                <Icon style={[styles.icon]} name={'person-circle-outline'} />
              </View>
            )}
        </View>
        {
          props.listItemSelect && props.id && props.setId && (
            <SelectCustom
              id={props.id}
              setId={props.setId}
              listItemSelect={props.listItemSelect}
              // color={Colors.status}
              // bgColor={Colors.status}
            />
          )
        }
        <View>
          {props.title && <Text style={[styles.title]}>{props.title}</Text>}
          {props.subTitle && (
            <Text style={[styles.subTitle]}>{props.subTitle}</Text>
          )}
        </View>
        <View
          style={[
            {
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
          ]}>
          { props.iconRight ? (
              <TouchableOpacity onPress={props.onIconRightPress}>
                <Icon
                  style={[styles.icon, props.iconStyle]}
                  name={props.iconRight}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ opacity: 0 }}>
                <Icon style={[styles.icon]} name={'person-circle-outline'} />
              </View>
            )}
        </View>
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
    backgroundColor: Colors.status,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  title: {
    fontSize: md * 1.1,
    color: Colors.white,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: md,
    color: Colors.white,
    textAlign: 'center',
  },
  icon: {
    fontSize: xl,
    paddingHorizontal: 5,
    color: Colors.white,
  },
  imageNoti: {
    width: 33,
    height: 33,
  },
  qtyNotifiBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{ translateX: 4 }, { translateY: -7 }],
    width: 18,
    height: 18,
    padding: 0,
    borderRadius: 10,
    backgroundColor: Colors.red1000,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
