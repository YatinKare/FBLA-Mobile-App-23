/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Button } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/Modal/ModalScreen';
import NotFoundScreen from '../screens/NotFound/NotFoundScreen';
import TabOneScreen from '../screens/TabOne/TabOneScreen';
import TabTwoScreen from '../screens/TabTwo/TabTwoScreen';

import CalendarScreen from '../screens/Calendar/CalendarScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';
//import { home } from '../screens/Login/LoginScreen';

import { UserContext } from '../screens/Login/LoginScreen';
import LoginScreen from '../screens/Login/LoginScreen';

import { useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import UpcomingScreen from '../screens/Upcoming/UpcomingScreen';






export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
/*
      { home ?  (
              ) : (
*/

function RootNavigator() {
  const { username, setUsername } = useContext(UserContext);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUsername  = await AsyncStorage.getItem('username');
        if(typeof storedUsername === "string"){
          setUsername(storedUsername);
        }
        console.log(username);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);


  return (
    <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen}/> 

        <>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: true,
        headerLeft: () => (
          <Button
            title={username}
            color="#fff"
          />

        ),    
    }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      </>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarIconStyle: { display: "none" }
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          headerShown: false,
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable 
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          headerShown: false,
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,        
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          headerShown: false,
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Upcoming"
        component={UpcomingScreen}
        options={{
          title: 'Upcoming',
          headerShown: false,
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


