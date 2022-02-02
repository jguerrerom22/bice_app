import {faCalendar, faUndo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Platform, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Label} from '../components/Label';
import {
  IndicadorDates,
  IndicadorDetailResponse,
  IndicadorResponse,
} from '../interfaces/apiInterfaces';
import {colors} from '../theme/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import biceApi from '../api/biceApi';

export const useIndicadorDetail = (params: IndicadorResponse) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [newValue, setNewValue] = useState<number>(params.value);
  const [newDate, setNewDate] = useState<number>(params.date);
  const [itemDates, setItemDates] = useState<IndicadorDates[]>([]);

  const detailItem = (
    label: string,
    value: string,
    isDate: boolean = false,
  ) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Label text={`${label}:`} style={styles.labelDetail} />
        <Label text={value} isBold style={styles.valueDetail} />
        {isDate && dateOptions()}
      </View>
    );
  };

  const dateOptions = () => {
    return (
      <View style={{marginLeft: 10, alignSelf: 'center', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setShowCalendar(true)}>
          <FontAwesomeIcon icon={faCalendar} size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => undoValues()}>
          <FontAwesomeIcon
            icon={faUndo}
            size={20}
            color={colors.primary}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        {showCalendar && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(newDate * 1000)}
            mode="date"
            display="default"
            onChange={setDate}
          />
        )}
      </View>
    );
  };

  const setDate = async (event: any, selectedDate: Date) => {
    setShowCalendar(Platform.OS === 'ios');
    const newDateUnix = selectedDate
      ? Number(selectedDate.getTime() / 1000)
      : newDate;
    setNewDate(newDateUnix);
    await getIndicadorDetail(formatDate(newDateUnix));
  };

  const undoValues = () => {
    setNewValue(params.value);
    setNewDate(params.date);
  };

  const formatDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    const day = padZeros(date.getDate());
    const month = padZeros(date.getMonth() + 1);
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const padZeros = (value: number, length: number = 2) => {
    return value.toString().padStart(length, '0');
  };

  const getIndicadorDetail = async (date?: string) => {
    try {
      if (date) {
        const {data} = await biceApi.get<IndicadorResponse>(
          `/${params.key}?date=${date.replace(/\//gi, '-')}`,
        );
        setNewValue(data.value || 0);
      } else {
        const {data} = await biceApi.get<IndicadorDetailResponse>(
          `/${params.key}`,
        );

        setItemDates(
          data.values
            .sort((a, b) => b.timestamp - a.timestamp)
            .map(value => ({
              date: formatDate(value.timestamp),
              value: value.value,
            })),
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {
    getIndicadorDetail,
    detailItem,
    newValue,
    newDate,
    formatDate,
    itemDates,
  };
};

const styles = StyleSheet.create({
  labelDetail: {
    fontSize: 18,
    textAlignVertical: 'bottom',
  },
  valueDetail: {
    fontSize: 25,
    marginLeft: 5,
    textAlignVertical: 'bottom',
  },
});
