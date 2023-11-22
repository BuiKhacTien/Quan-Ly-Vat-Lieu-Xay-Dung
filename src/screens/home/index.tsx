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

function HomeScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const [yearId, setYearId] = useState('2023')

  const handleAddYear = () => {

  }

  return (
    <Screen
      fullscreen
      // title='Năm 2023'
      listItemSelect={YEAR_DATA}
      id={yearId}
      setId={setYearId}
      headerShown
      style={{  }}
      // iconLeft='add-circle-sharp'
      // onIconLeftPress={() => {}}
      iconRight='add-circle-sharp'
      onIconRightPress={handleAddYear}
    >
      <View style={[styles.container]}>
        <TouchableOpacity
          style={{ margin: 0 }}
          onPress={() => navigation.navigate('Splash')}
        >
          <Text>Splash</Text>
        </TouchableOpacity>

      </View>
    </Screen>
  )
}


export default HomeScreen;


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