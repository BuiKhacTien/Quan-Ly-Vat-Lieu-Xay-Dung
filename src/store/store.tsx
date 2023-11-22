import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import userReducer from './user/reducer';
import supplierReducer from './supplier/reducer';
import customerReducer from './customer/reducer';
import materialReducer from './material/reducer';
import saleReducer from './sale/reducer';
import purchaseReducer from './purchase/reducer';
import UserGetter from './user/getters';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [

  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    supplier: supplierReducer,
    customer: customerReducer,
    material: materialReducer,
    sale: saleReducer,
    purchase: purchaseReducer,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
  ],
});

UserGetter.store = store as any;
// CustomerGetter.store = store as any;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persister = persistStore(store);

export default store;
