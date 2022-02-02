import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {IndicadorResponse} from '../interfaces/apiInterfaces';
import {IndicadorDetail} from '../screens/IndicadorDetail';

export type RootStackParams = {
  HomeScreen: undefined;
  IndicadorDetail: IndicadorResponse;
};

const Stack = createStackNavigator<RootStackParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#F9F9F8',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IndicadorDetail" component={IndicadorDetail} />
    </Stack.Navigator>
  );
};
