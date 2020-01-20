import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import MenuRoutes from './routes/menu.routes';
import RepositoriRoutes from './routes/repository.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{}}
      mode="modal"
      headerMode="none">
      <Stack.Screen name="Menu" component={MenuRoutes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Repositori" component={RepositoriRoutes} />
    </Stack.Navigator>
  );
}
