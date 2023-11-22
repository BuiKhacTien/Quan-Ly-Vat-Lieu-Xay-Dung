import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$reset} from '../actions';
import { TCustomer } from '../../types/Types';


export type TData = {
  customer: TCustomer[];
}

const initialState = {} as TData;

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    set(state, action: PayloadAction<TData>) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase($reset.type, () => initialState);
  },
});

export const customerSliceActions = customerSlice.actions;
export default customerSlice.reducer;
