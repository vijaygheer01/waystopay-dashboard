import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './../reducer/rootReducer'; // your root reducer
import { thunk } from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // ... other configurations if needed ...
},applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
