import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$reset} from '../actions';
import { TCustomer, TPurchaseOrder } from '../../types/Types';


export type TData = {
  purchase: TPurchaseOrder[];
}

const initialState = {} as TData;

const purchaseSlice = createSlice({
  name: 'purchase',
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

export const purchaseSliceActions = purchaseSlice.actions;
export default purchaseSlice.reducer;
