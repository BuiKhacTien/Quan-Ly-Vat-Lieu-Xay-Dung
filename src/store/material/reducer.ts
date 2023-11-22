import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$reset} from '../actions';
import { TMaterial } from '../../types/Types';



export type TData = {
  material: TMaterial[];
}

const initialState = {} as TData;

const materialSlice = createSlice({
  name: 'material',
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

export const materialSliceActions = materialSlice.actions;
export default materialSlice.reducer;
