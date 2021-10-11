import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeBaseProvider} from 'native-base';
import Home from './src/Home';
import Data from './src/Data';
import colors from './src/assets/Colors';

const Tab = createBottomTabNavigator();

const defaultScreenOption = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.black,
  headerLeft: () => null,
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'menu' : 'menu-outline';
              } else if (route.name === 'Data') {
                iconName = focused ? 'list' : 'list-outline';
              }

              return <Ionicons name={iconName} size={size} />;
            },
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.black,
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarInactiveBackgroundColor: colors.primary,
          })}>
          <Tab.Screen
            options={{...defaultScreenOption, title: 'CovData'}}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{...defaultScreenOption, title: 'Data'}}
            name="Data"
            component={Data}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
