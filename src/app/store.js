import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import employeeReducer from '../features/employee-list/employeeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    employee:employeeReducer
  },
});
