import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { changePassword, checkUser, createUser, sendMail } from './authAPI';

const initialState = {
  value: 0, 
  status: 'idle',
  loggedInUserToken: null,
};
export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (userData) => {
    console.log(userData);
    const response = await checkUser(userData);
    return response.data;
  }
);

export const sendMailAsync = createAsyncThunk(
  'user/sendMail',
  async (userData) => {
    console.log(userData);
    const response = await sendMail(userData);
    return response.data;
  }
)

export const changePasswordAsync = createAsyncThunk(
  'user/changePassword',
  async (data) => {
    console.log(data);
    const response = await changePassword(data)
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(sendMailAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMailAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(changePasswordAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changePasswordAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        // state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;


export const selectCount = (state) => state.user.value;
export default authSlice.reducer;
