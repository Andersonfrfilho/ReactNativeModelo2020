import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Repositories from '../pages/Repositories';

const Drawer = createDrawerNavigator();

export default function repositoriRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Repositories} />
    </Drawer.Navigator>
  );
}
