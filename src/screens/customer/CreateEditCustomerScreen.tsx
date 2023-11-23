import React, { useState, useEffect, useCallback } from 'react'
import { Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Lottie_Files } from '../../assets';
import { useAppNavigation } from '../AppNavigator';
import { useAppState } from '../../hooks/useAppState';
import Screen from '../../components/common/Screen';
import FastImage from 'react-native-fast-image';
import { vw, height, vh, md, sm, xs, lg } from '../../contants/Sizes';
import Colors from '../../contants/Colors';
import { useAppDispatch } from '../../store/hooks';
import numeral from 'numeral';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YEAR_DATA } from '../../contants/InitialState';
import Footer from '../../components/common/Footer';
import { TCustomer } from '../../types/Types';
import LinearGradientCustom from '../../components/common/LinearGradientCustom';
import Button from '../../components/common/Button';
import { customerSliceActions } from '../../store/customer/reducer';
import { useCustomer } from '../../store/customer/hooks';

function CreateEditCustomerScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const {customer: customers = []} = useCustomer();

  const [customer, setCustomer] = useState<TCustomer>({
    id: 0,
    name: '',
    phone: '',
    address: '',
    note: '',
  })

  useEffect(() => {
    const time = new Date().getTime()
    setCustomer({
      ...customer,
      id: time,
    })
  }, [])

  const handlePressXacNhan = () => {
    if (!customer.name) return Alert.alert('','Vui lòng nhập tên khách hàng!')

    dispatch(customerSliceActions.set({customer: [...customers, customer]}));
    Alert.alert('','Tạo khách hàng mới thành công!')
    navigation.goBack()
  }

  console.log('customer', {customer});

  return (
    <Screen
      fullscreen
      headerShown
      title='Tạo mới khách hàng'
      iconLeft='chevron-back'
      onIconLeftPress={() => navigation.goBack()}
    // iconRight='add-circle-sharp'
    // onIconRightPress={handleNavigationAddCustomer}
    >
      <View style={[styles.container]}>
        <TextInput
          style={[styles.input]}
          placeholder='Nhập tên khách hàng...'
          value={customer?.name}
          onChangeText={v => setCustomer({ ...customer, name: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập số điện thoại...'
          value={customer?.phone}
          onChangeText={v => setCustomer({ ...customer, phone: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập địa chỉ...'
          value={customer?.address}
          onChangeText={v => setCustomer({ ...customer, address: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập ghi chú...'
          value={customer?.note}
          onChangeText={v => setCustomer({ ...customer, note: v })}
        />
        <Button onPress={handlePressXacNhan}/>
      </View>
    </Screen>
  )
}

export default CreateEditCustomerScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.whiteO1,
  },
  mot: {

  },
  input: {
    fontSize: md,
    color: Colors.black,
    borderWidth: 2,
    borderColor: Colors.mainColor,
    margin: sm,
    paddingVertical: sm * 0.6,
    paddingHorizontal: sm,
    borderRadius: sm,
  },
})