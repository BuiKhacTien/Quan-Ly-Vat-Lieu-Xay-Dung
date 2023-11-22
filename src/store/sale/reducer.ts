import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$reset} from '../actions';
import { TSaleOrder } from '../../types/Types';


export type TData = {
  sale: TSaleOrder[];
}

const initialState = {} as TData;

const saleSlice = createSlice({
  name: 'sale',
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

export const saleSliceActions = saleSlice.actions;
export default saleSlice.reducer;
