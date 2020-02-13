import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import MenuRoutes from './routes/menu.routes';
import RepositoriRoutes from './routes/repository.routes';
import {setNavigator} from './services/navigation';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{}}
        mode="modal"
        headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={MenuRoutes} />
        <Stack.Screen name="Repositori" component={RepositoriRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
