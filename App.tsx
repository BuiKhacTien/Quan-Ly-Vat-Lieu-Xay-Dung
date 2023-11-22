import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';
import { persister } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/AppContext';

import 'react-native-gesture-handler';
import AppNavigator from './src/screens/AppNavigator';

Ionicons.loadFont();

const App = () => {

  return (
    <Provider store={store}>
      <AppProvider>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <PersistGate loading={null} persistor={persister}>
                <AppNavigator />
                <Toast />
              </PersistGate>
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </AppProvider>
    </Provider>
  );
};

export default App;
