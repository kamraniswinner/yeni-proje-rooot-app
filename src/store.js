// store.js
import { configureStore } from '@reduxjs/toolkit';
import ownerReducers from './reducers/ownerReducers'; // Import the owner reducer

const store = configureStore({
  reducer: {
    owner: ownerReducers, // Add the owner reducer to the store
  },
});

export default store;
