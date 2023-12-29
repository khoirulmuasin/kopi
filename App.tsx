import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/component/Home';
import Kopi from './src/component/Kopi';
import Aku from './src/component/Aku';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Kopi') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'Aku') {
              iconName = focused ? 'person-circle-outline' : 'person-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          style: {
            backgroundColor: '#ffc125',
            height: 60,
            paddingBottom: 5,
          },
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ title: '', headerShown: false }}
        />
        <Tab.Screen name='Kopi' component={Kopi} options={{ title: '', headerShown: false }} />
        <Tab.Screen name='Aku' component={Aku} options={{ title: '', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
