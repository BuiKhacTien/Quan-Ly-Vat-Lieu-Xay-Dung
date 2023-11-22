import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import HomeScreen from './home';
import SplashScreen from './splash';

type TAppParams = {
  Home: any;
  Splash: any;
};
const Stack = createNativeStackNavigator<TAppParams>();

export function useAppNavigation() {
  return useNavigation<NavigationProp<TAppParams>>();
}

export default function AppNavigator() {
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, orientation: 'portrait_up' }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'none' }} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{ animation: 'none' }} />
    </Stack.Navigator>
  );
}
