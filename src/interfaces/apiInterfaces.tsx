export interface IndicadorResponse {
  key: string;
  name: string;
  unit: string;
  date: number;
  value: number;
}

export interface IndicadorDetailResponse {
  key: string;
  name: string;
  unit: string;
  date?: number;
  value?: number;
  values: IndicadorDetailValue[];
}

export interface IndicadorDetailValue {
  timestamp: number;
  value: number;
}

export interface IndicadorDates {
  date: string;
  value: number;
}
