import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Repositories from './pages/Repositories';

const createSwitchNavigatorApp = createSwitchNavigator({
  Login,
  Menu,
  Repositories,
});
const createStackNavigatorApp = createStackNavigator({
  Login,
  Menu,
  Repositories,
});
const createBottomTabNavigatorApp = createBottomTabNavigator({
  Login,
  Menu,
  Repositories,
});
const createDrawerNavigatorApp = createDrawerNavigator({
  Home: {
    screen: createStackNavigator({
      Menu,
    }),
  },
  Notifications: {
    screen: createBottomTabNavigator({
      Repositories,
      Login,
    }),
  },
});
const createAppNavigation = createSwitchNavigator({
  Login,
  Menu: {screen: createDrawerNavigatorApp},
});
const Routes = createAppContainer(createAppNavigation);

export default Routes;
