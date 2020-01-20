import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

function Tabless() {
  return <Text>alksjdfhlkajsf-</Text>;
}
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Tabless} />
      <Tab.Screen name="Article" component={Tabless} />
    </Tab.Navigator>
  );
}
