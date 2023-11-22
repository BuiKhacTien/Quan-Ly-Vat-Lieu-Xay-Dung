import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$reset} from '../actions';
import { TSupplier } from '../../types/Types';

export type TData = {
  supplier: TSupplier[];
}

const initialState = {} as TData;

const supplierSlice = createSlice({
  name: 'supplier',
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

export const supplierSliceActions = supplierSlice.actions;
export default supplierSlice.reducer;
