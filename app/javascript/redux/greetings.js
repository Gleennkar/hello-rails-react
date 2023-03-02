import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greetingSlice/getGreetings', async () => {
    const response = await fetch('http://127.0.0.1:4000/greetings')
      .then((greetings) => greetings.json());
      return response;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
   greetings: [],
    loading: true,
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      const newState = state;
      newState.greetings.push(action.payload);
      return newState;
    });
  },
});

export default greetingSlice;