import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings';
import { getGreetings} from './greetings';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  }
});

export default store;