import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MainNavigator} from './src/navigation/MainNavigator';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <MainNavigator />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
