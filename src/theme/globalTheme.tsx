import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  globalMargin: {
    margin: 20,
  },
  regularFont: {
    fontFamily: 'VisbyRoundCF-Regular',
  },
  boldFont: {
    fontFamily: 'VisbyRoundCF-Bold',
  },
  extraBoldFont: {
    fontFamily: 'VisbyRoundCF-ExtraBold',
  },
  mediumFont: {
    fontFamily: 'VisbyRoundCF-Medium',
  },
  semiBoldFont: {
    fontFamily: 'VisbyRoundCF-DemiBold',
  },
  shadow: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    // backgroundColor: '#fff',
    elevation: 1, // Android
  },
  divider: {
    height: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: colors.primary,
  },
});
