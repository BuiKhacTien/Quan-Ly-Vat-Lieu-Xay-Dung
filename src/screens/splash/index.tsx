import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/common/Screen';
import { useUser } from '../../store/user/hooks';
import { useAppDispatch } from '../../store/hooks';
import { useAppRun } from '../../context/AppContext';
import { useAppNavigation } from '../AppNavigator';
import { sm, vw } from '../../contants/Sizes';
import Colors from '../../contants/Colors';
import LottieView from 'lottie-react-native';
import { IMAGES, Lottie_Files } from '../../assets';
import { useDataBase } from '../../store/database/hooks';
import { databaseSliceActions } from '../../store/database/reducer';
import { ITEMS } from '../../contants/InitialState';


export default function SplashScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const { preparing } = useAppRun();

  useEffect(() => {
    if (preparing) return;
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'Home' }] });
    }, 5000);
  }, [preparing]);

  return (
    <Screen
      fullscreen
      source={IMAGES.background2jpeg}
    >
      <View style={[styles.container]}>
        {preparing && (
          <View style={[styles.header]}>
            <Text style={[styles['header-text']]}>{preparing}</Text>
          </View>
        )}
        <View>
          <LottieView source={Lottie_Files.phihanhgiacode} autoPlay loop style={{ width: 80 * vw, height: 80 * vw }} />
        </View>
        <View style={[styles.footer]}>
          <Text style={[styles['footer-text']]}>Powered by Tien</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 100,
    left: 0,
    padding: 20,
    width: 100 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  'header-text': {
    width: 100 * vw,
    color: Colors.mainColor,
    fontSize: sm,
    fontWeight: '400',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  'footer-text': {
    color: Colors.mainColor,
    textAlign: 'center',
  },
});
