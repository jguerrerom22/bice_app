import {IndicadorResponse, IndicadorDetailResponse} from './apiInterfaces';

export interface IndicadorState {
  isLoading: boolean;
  indicadores: IndicadorResponse[];
  indicador?: IndicadorDetailResponse;
}

export interface IndicadorDateSearch {
  key: string;
  date: string;
}
