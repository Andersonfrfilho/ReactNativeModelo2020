import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
// onde host é o ip da sua maquina
if (__DEV__) {
  const tron = Reactotron.configure(
    Platform.OS === 'ios' ? null : {host: '192.168.197.2'}
  )
    .setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  console.tron = tron;
  tron.clear();
}
