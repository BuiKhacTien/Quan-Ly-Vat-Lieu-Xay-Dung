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
import LinearGradientCustom from '../../components/common/LinearGradientCustom';
import Button from '../../components/common/Button';
import { TSupplier } from '../../types/Types';
import { useSupplier } from '../../store/supplier/hooks';
import { supplierSliceActions } from '../../store/supplier/reducer';

function CreateEditSupplierScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { supplier: suppliers = [] } = useSupplier();

  const [supplier, setSupplier] = useState<TSupplier>({
    id: 0,
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    note: '',
  })

  useEffect(() => {
    const time = new Date().getTime()
    setSupplier({
      ...supplier,
      id: time,
    })
  }, [])

  const handlePressXacNhan = () => {
    if (!supplier.name) return Alert.alert('', 'Vui lòng nhập tên nhà cung cấp!')
    if (!supplier.contactPerson) return Alert.alert('', 'Vui lòng nhập tên người đại diện')
    if (!supplier.phone) return Alert.alert('', 'Vui lòng nhập số điện thoại')
    dispatch(supplierSliceActions.set({ supplier: [...suppliers, supplier] }));
    Alert.alert('', 'Tạo nhà cung cấp mới thành công!')
    navigation.goBack()
  }

  console.log('suppliers', suppliers);

  return (
    <Screen
      fullscreen
      headerShown
      title='Tạo mới nhà cung cấp'
      iconLeft='chevron-back'
      onIconLeftPress={() => navigation.goBack()}
    // iconRight='add-circle-sharp'
    // onIconRightPress={handleNavigationAddCustomer}
    >
      <View style={[styles.container]}>
        <TextInput
          style={[styles.input]}
          placeholder='Nhập tên nhà cung cấp...'
          value={supplier?.name}
          onChangeText={v => setSupplier({ ...supplier, name: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập tên người đại diện...'
          value={supplier?.contactPerson}
          onChangeText={v => setSupplier({ ...supplier, contactPerson: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập số điện thoại...'
          value={supplier?.phone}
          onChangeText={v => setSupplier({ ...supplier, phone: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập địa chỉ...'
          value={supplier?.address}
          onChangeText={v => setSupplier({ ...supplier, address: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập email...'
          value={supplier?.email}
          onChangeText={v => setSupplier({ ...supplier, email: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập ghi chú...'
          value={supplier?.note}
          onChangeText={v => setSupplier({ ...supplier, note: v })}
        />
        <Button onPress={handlePressXacNhan} />
      </View>
    </Screen>
  )
}

type TCustomss = {
  id: number;
  name: string;
  phone: string;
  address: string;
  note: number;
}

export default CreateEditSupplierScreen;


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