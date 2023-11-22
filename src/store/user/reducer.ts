import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TUser, {  } from '../../types/TUser';
import {$reset} from '../actions';

const initialState = {} as TUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set(state, action: PayloadAction<TUser>) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase($reset.type, () => initialState);
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
