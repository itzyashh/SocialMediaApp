import {Text} from 'react-native';
import Routes from './Routes';

const {createStackNavigator} = require('@react-navigation/stack');
const {default: Profile} = require('../src/screens/Profile/Profile');
const {default: Home} = require('../src/screens/Home/Home');

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
