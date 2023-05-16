import { createStore } from 'redux'
import { reducer } from './reducer';

const store= createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store; /*
import { configureStore } from '@reduxjs/toolkit';
import { invoiceReducer } from './invoiceSlice/invoiceReducer';

const store = configureStore({
  reducer: invoiceReducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;*/
