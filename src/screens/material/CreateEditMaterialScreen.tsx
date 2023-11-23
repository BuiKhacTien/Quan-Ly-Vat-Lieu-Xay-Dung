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
import { TMaterial } from '../../types/Types';
import { useMaterial } from '../../store/material/hooks';
import { materialSliceActions } from '../../store/material/reducer';


function CreateEditMaterialScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { material: materials = [] } = useMaterial();

  const [material, setMaterial] = useState<TMaterial>({
    id: 0,
    name: '',
    description: '',
    unit: '',
    inventory: 0,
    currentPrice: 0,
  })

  useEffect(() => {
    const time = new Date().getTime()
    setMaterial({
      ...material,
      id: time,
    })
  }, [])

  const handlePressXacNhan = () => {
    if (!material.name) return Alert.alert('', 'Vui lòng nhập tên vật liệu!')
    if (!material.unit) return Alert.alert('', 'Vui lòng nhập đơn vị tính!')
    if (!material.currentPrice) return Alert.alert('', 'Vui lòng nhập giá tiền trên mỗi đơn vị tính!')


    dispatch(materialSliceActions.set({ material: [...materials, material] }));
    Alert.alert('', 'Tạo vật liệu mới thành công!')
    navigation.goBack()
  }

  console.log('material', material);

  const handleInputChange = (inputValue: string, key: string) => {
    // Xóa mọi ký tự không phải số
    const formattedInput = inputValue.replace(/[^0-9]/g, '');
    if (formattedInput.length > 14) {
      setMaterial({
        ...material,
        [key]: 0,
      });
      return Alert.alert('','Số quá lớn, vui lòng nhập lại!')
    } 
    setMaterial({
      ...material,
      [key]: +formattedInput,
    });
  };

  return (
    <Screen
      fullscreen
      headerShown
      title='Tạo mới vật liệu'
      iconLeft='chevron-back'
      onIconLeftPress={() => navigation.goBack()}
    // iconRight='add-circle-sharp'
    // onIconRightPress={handleNavigationAddCustomer}
    >
      <View style={[styles.container]}>
        <TextInput
          style={[styles.input]}
          placeholder='Nhập tên vật liệu...'
          value={material?.name}
          onChangeText={v => setMaterial({ ...material, name: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập mô tả...'
          value={material?.description}
          onChangeText={v => setMaterial({ ...material, description: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập đơn vị tính...'
          value={material?.unit}
          onChangeText={v => setMaterial({ ...material, unit: v })}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập giá trên mỗi đơn vị tính...'
          value={material?.currentPrice === 0 ? '' : numeral(material?.currentPrice).format('0,000') + ''}
          onChangeText={v => handleInputChange(v, 'currentPrice')}
        />
        <TextInput
          style={[styles.input]}
          placeholder='Nhập tồn kho...'
          value={material?.inventory === 0 ? '' : numeral(material?.inventory).format('0,000') + ''}
          onChangeText={v => handleInputChange(v, 'inventory')}
          keyboardType="numeric"
        />
        <Button onPress={handlePressXacNhan} />
      </View>
    </Screen>
  )
}

export default CreateEditMaterialScreen;


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