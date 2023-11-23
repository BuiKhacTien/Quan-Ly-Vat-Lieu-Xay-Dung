import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import HomeScreen from './home';
import SplashScreen from './splash';
import CustomerScreen from './customer';
import SupplierScreen from './supplier';
import MaterialScreen from './material';
import SellScreen from './sell';
import OrderScreen from './order';
import CreateEditCustomerScreen from './customer/CreateEditCustomerScreen';
import CreateEditMaterialScreen from './material/CreateEditMaterialScreen';
import CreateEditSupplierScreen from './supplier/CreateEditSupplierScreen';
import CreateEditSellScreen from './sell/CreateEditSellScreen';
import CreateEditOrderScreen from './order/CreateEditOrderScreen';


type TAppParams = {
  Home: any;
  Customer: any;
  CreateEditCustomer: any;
  Supplier: any;
  CreateEditSupplier: any;
  Material: any;
  CreateEditMaterial: any;
  Sell: any;
  CreateEditSell: any;
  Order: any;
  CreateEditOrder: any;
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
      <Stack.Screen name="Customer" component={CustomerScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateEditCustomer" component={CreateEditCustomerScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="Supplier" component={SupplierScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateEditSupplier" component={CreateEditSupplierScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="Material" component={MaterialScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateEditMaterial" component={CreateEditMaterialScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="Sell" component={SellScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateEditSell" component={CreateEditSellScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="Order" component={OrderScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateEditOrder" component={CreateEditOrderScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{ animation: 'none' }} />
    </Stack.Navigator>
  );
}