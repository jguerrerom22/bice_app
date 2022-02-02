import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Label} from '../components/Label';
import {colors} from '../theme/colors';
import {globalStyles} from '../theme/globalTheme';
import {IndicadorCard} from '../components/IndicadorCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/MainNavigator';
import {selectIndicador} from '../store';
import {getIndicadores} from '../store/thunks/indicadorThunk';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {isLoading, indicadores} = useSelector(selectIndicador);

  useEffect(() => {
    if (indicadores.length === 0) {
      dispatch(getIndicadores());
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', paddingHorizontal: 30}}>
        <FlatList
          style={{width: '100%'}}
          data={indicadores}
          keyExtractor={indicador => indicador.key}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
          onRefresh={() => dispatch(getIndicadores())}
          ListHeaderComponent={
            <Label text="Indicadores" isBold style={styles.title} />
          }
          ItemSeparatorComponent={() => (
            <View style={{...globalStyles.divider}} />
          )}
          renderItem={({item}) => (
            <IndicadorCard
              item={item}
              onPress={() => navigation.navigate('IndicadorDetail', item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginBottom: 30,
    marginTop: 10,
    top: 20,
    paddingBottom: 10,
    color: colors.primary,
  },
});
