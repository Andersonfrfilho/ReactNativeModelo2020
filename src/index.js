import 'react-native-gesture-handler';
import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';
import {setNavigator} from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationNativeContainer ref={setNavigator}>
        <StatusBar barStyle="light-content" backgroundColor="#565677" />
        <Routes />
      </NavigationNativeContainer>
    </Provider>
  );
}
