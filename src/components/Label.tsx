import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {colors} from '../theme/colors';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  text: string;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const Label = ({
  text,
  isBold = false,
  style = {},
  numberOfLines = 1,
}: Props) => {
  return (
    <Text
      style={{
        ...(isBold ? globalStyles.boldFont : globalStyles.regularFont),
        fontSize: 15,
        color: colors.text,
        ...(style as any),
      }}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};
