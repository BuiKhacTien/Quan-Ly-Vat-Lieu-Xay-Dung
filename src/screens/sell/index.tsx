import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Lottie_Files } from '../../assets';
import { useAppNavigation } from '../AppNavigator';
import { useAppState } from '../../hooks/useAppState';
import Screen from '../../components/common/Screen';
import FastImage from 'react-native-fast-image';
import { vw, height, vh, md, sm, xs } from '../../contants/Sizes';
import Colors from '../../contants/Colors';
import { useAppDispatch } from '../../store/hooks';
import numeral from 'numeral';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YEAR_DATA } from '../../contants/InitialState';
import Footer from '../../components/common/Footer';

function SellScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();


  return (
    <Screen
      fullscreen
      headerShown
      title='Đơn hàng bán'
      iconLeft='chevron-back'
      onIconLeftPress={() => navigation.goBack()}
      // iconRight='add-circle-sharp'
      // onIconRightPress={handleAddYear}
    >
      <View style={[styles.container]}>


      </View>
    </Screen>
  )
}


export default SellScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.whiteO1,
  },
  mot: {

  },
  hai: {

  },

})