import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function WildCard({title = 'lol'}) {
  return <Text>{title}</Text>;
}

export default function MenuRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Repositories1" component={() => <WildCard />} />
      <Tab.Screen name="Repositories2" component={() => <WildCard />} />
      <Tab.Screen name="Repositories3" component={() => <WildCard />} />
      <Tab.Screen name="Repositories4" component={() => <WildCard />} />
    </Tab.Navigator>
  );
}
