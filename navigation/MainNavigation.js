import {Text, View} from 'react-native';
import Routes from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../src/components/ProfileTabTitle';
import ProfileTabComponent from '../src/components/ProfileTabComponent';

const {createStackNavigator} = require('@react-navigation/stack');
const {default: Profile} = require('../src/screens/Profile/Profile');
const {default: Home} = require('../src/screens/Home/Home');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab2 = () => {
  return (
    <View>
      <Text>Tab2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View>
      <Text>Tab3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        component={ProfileTabComponent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Photos" isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Videos" isFocused={focused} />
          ),
        }}
        name="Tab2"
        component={ProfileTabComponent}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Saved" isFocused={focused} />
          ),
        }}
        name="Tab3"
        component={ProfileTabComponent}
      />
    </ProfileTabs.Navigator>
  );
};

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
