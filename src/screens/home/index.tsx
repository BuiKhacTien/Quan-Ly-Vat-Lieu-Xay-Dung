import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IMAGES, Lottie_Files } from '../../assets';
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

function HomeScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const MENU = useMemo(() => {
    return [
      {
        name: 'Khách hàng',
        navigation: () => navigation.navigate('Customer'),
        image: IMAGES.customer,
      },
      {
        name: 'Nhà cung cấp',
        navigation: () => navigation.navigate('Supplier'),
        image: IMAGES.supplier,
      },
      {
        name: 'Vật liệu',
        navigation: () => navigation.navigate('Material'),
        image: IMAGES.buildingmaterials,
      },
      {
        name: 'Đơn hàng bán',
        navigation: () => navigation.navigate('Sell'),
        image: IMAGES.sell,
      },
      {
        name: 'Đơn nhập hàng',
        navigation: () => navigation.navigate('Order'),
        image: IMAGES.order,
      },
    ]
  }, [])

  return (
    <Screen
      fullscreen
      headerShown
      title='Trang chủ'
    // footer={<Footer name='Home'/>}
    // listItemSelect={YEAR_DATA}
    // id={yearId}
    // setId={setYearId}
    // style={{  }}
    // iconLeft='add-circle-sharp'
    // onIconLeftPress={() => {}}
    // iconRight='add-circle-sharp'
    // onIconRightPress={handleAddYear}
    >
      <View style={[styles.container]}>
        <View style={[styles.actions]}>
          {
            MENU.map((value, index) => (
              <View key={value.name + index}>
                <View style={[styles.viewBox]}>
                  <TouchableOpacity
                    style={[styles.itemBox]}
                    activeOpacity={0.6}
                    onPress={value.navigation}
                  >
                    <FastImage source={value.image} style={{ width: 18 * vw, height: 18 * vw, marginHorizontal: lg }} />
                    <Text style={[styles.name]}>{value.name}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          }
        </View>

      </View>
    </Screen>
  )
}


export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mot: {

  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBox: {
    margin: sm/3,
    padding: sm/3,
    backgroundColor: Colors.mainColor + '11',
    borderRadius: md,
  },
  itemBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
    paddingVertical: 5,
    // paddingHorizontal: lg,
    backgroundColor: Colors.mainColor + '22',
    borderRadius: md,
  },
  name: {
    color: Colors.mainColor,
    fontSize: sm*1.1,
    fontWeight: '700',
    marginTop: sm,
  }
})