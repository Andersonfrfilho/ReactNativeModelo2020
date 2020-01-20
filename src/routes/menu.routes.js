import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function WildCard({title = 'lol'}) {
  return <Text>{title}</Text>;
}

export function MenuRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Repositories" component={() => <WildCard />} />
      <Tab.Screen name="Repositories" component={() => <WildCard />} />
      <Tab.Screen name="Repositories" component={() => <WildCard />} />
      <Tab.Screen name="Repositories" component={() => <WildCard />} />
    </Tab.Navigator>
  );
}
