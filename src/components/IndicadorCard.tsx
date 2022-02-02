import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Indicador} from '../interfaces/apiInterfaces';
import {colors} from '../theme/colors';
import {globalStyles} from '../theme/globalTheme';
import {Label} from './Label';

interface Props {
  item: Indicador;
  onPress: () => void;
}
export const IndicadorCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginVertical: 10, flex: 1}}>
          <Label
            text={item.name}
            style={{fontSize: 22, ...globalStyles.semiBoldFont}}
            numberOfLines={2}
          />
          <View style={{flexDirection: 'row'}}>
            <Label
              text={item.value.toString()}
              isBold
              style={{
                fontSize: 28,
                color: colors.secondary,
                textAlignVertical: 'bottom',
                ...globalStyles.extraBoldFont,
              }}
            />
            <Label
              text={item.unit}
              style={{
                fontSize: 20,
                textAlignVertical: 'bottom',
                marginLeft: 5,
              }}
            />
          </View>
        </View>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={17}
          color={colors.text}
          style={{alignSelf: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};
