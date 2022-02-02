import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Label} from '../components/Label';
import {RootStackParams} from '../navigation/MainNavigator';
import {globalStyles} from '../theme/globalTheme';
import {colors} from '../theme/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import {useIndicadorDetail} from '../hooks/useIndicadorDetail';

interface Props extends StackScreenProps<RootStackParams, 'IndicadorDetail'> {}

export const IndicadorDetail = ({route: {params}, navigation}: Props) => {
  const [showHistory, setShowHistory] = useState(false);
  const {
    showCalendar,
    getIndicadorDetail,
    detailItem,
    newValue,
    newDate,
    formatDate,
    itemDates,
    setDate,
  } = useIndicadorDetail(params);
  useEffect(() => {
    getIndicadorDetail();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={20}
          color={colors.text}
          style={{marginTop: 20}}
        />
      </TouchableOpacity>

      <Label text={params.name} style={styles.title} numberOfLines={3} />

      <View style={styles.detailContainer}>
        {detailItem('ID', params.key)}
        {detailItem('Valor', newValue.toString())}
        {detailItem('Unidad', params.unit)}
        {detailItem('Fecha', formatDate(newDate), true)}
      </View>

      {showCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(newDate * 1000)}
          mode="date"
          display="default"
          onChange={setDate}
        />
      )}

      <TouchableOpacity onPress={() => setShowHistory(!showHistory)}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon
            icon={showHistory ? faChevronUp : faChevronDown}
            style={styles.linkIcon}
          />
          <Label text="Ver histórico" style={styles.link} />
        </View>
      </TouchableOpacity>

      {showHistory && (
        <FlatList
          style={{width: '100%', marginTop: 20}}
          data={itemDates}
          keyExtractor={item => item.date}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({item}) => (
            <View style={{flex: 1, marginVertical: 10}}>
              <Label
                text={item.value.toString()}
                style={{fontSize: 22}}
                isBold
              />
              <Label text={item.date} style={{fontSize: 18}} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.globalMargin,
    marginBottom: 0,
    flex: 1,
  },
  title: {
    color: colors.secondary,
    fontSize: 30,
    marginTop: 30,
  },
  detailContainer: {
    marginTop: 40,
  },
  link: {
    ...globalStyles.link,
    marginTop: 30,
    fontSize: 20,
    textAlignVertical: 'center',
  },
  linkIcon: {
    ...globalStyles.link,
    marginTop: 33,
    marginRight: 3,
  },
});
