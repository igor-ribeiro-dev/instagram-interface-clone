import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, View} from "react-native";
import Home from "./src/pages/Home";
import logo from './assets/instagram.png'
import {Feather} from "@expo/vector-icons";
import {SimpleLineIcons} from "@expo/vector-icons";

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Navigator initialRouteName={'Home'}>
              <Screen
                  headerComponent={() => {}}
                  name={'Home'}
                  component={Home}
                  options={{
                      headerTitleAlign: 'center',
                      headerTitle: <Image source={logo} />,
                      headerStyle: {
                          backgroundColor: 'white'
                      },
                      headerLeft: () =>  <Feather.Button onPress={() => {}} backgroundColor={'white'} name={'camera'} size={24} color={'black'} />,
                      headerRight: () =>  <SimpleLineIcons.Button onPress={() => {}} backgroundColor={'white'} name={'paper-plane'} size={24} color={'black'} />,
                      headerLeftContainerStyle:{
                          marginLeft: 5
                      },
                      headerRightContainerStyle: {
                          marginRight: 0
                      }
                  }}
              />
          </Navigator>
      </NavigationContainer>
  );
}
