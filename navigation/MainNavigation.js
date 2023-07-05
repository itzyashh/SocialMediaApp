import {Text} from 'react-native';
import Routes from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';

const {createStackNavigator} = require('@react-navigation/stack');
const {default: Profile} = require('../src/screens/Profile/Profile');
const {default: Home} = require('../src/screens/Home/Home');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
