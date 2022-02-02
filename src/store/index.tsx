import {configureStore} from '@reduxjs/toolkit';
import indicadorReducer from './slices/indicadorSlice';
const store = configureStore({
  reducer: {
    indicador: indicadorReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectIndicador = (state: RootState) => state.indicador;

export default store;
