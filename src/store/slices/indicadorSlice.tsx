import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IndicadorResponse} from '../../interfaces/apiInterfaces';
import {IndicadorState} from '../../interfaces/stateInterfaces';
import {getIndicadores} from '../thunks/indicadorThunk';

const initialState: IndicadorState = {
  isLoading: false,
  indicadores: [],
  indicador: undefined,
};

const slice = createSlice({
  name: 'indicador',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // getAll
      .addCase(
        getIndicadores.fulfilled,
        (state, action: PayloadAction<IndicadorResponse[]>) => {
          state.indicadores = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getIndicadores.pending, state => {
        state.isLoading = true;
      })
      .addCase(getIndicadores.rejected, state => {
        state.indicadores = [];
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
