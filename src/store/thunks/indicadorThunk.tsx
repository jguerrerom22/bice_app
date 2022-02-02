import {createAsyncThunk} from '@reduxjs/toolkit';
import biceApi from '../../api/biceApi';
import {IndicadorResponse} from '../../interfaces/apiInterfaces';

export const getIndicadores = createAsyncThunk('indicador/getAll', async () => {
  const {data} = await biceApi.get<IndicadorResponse[]>('/');
  return data;
});
