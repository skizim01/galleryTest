
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageListScreen from './components/ImageList';
import SingleImageScreen from './components/SingleImage';
import { View } from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        headerMode="none"
        initialRouteName="ImageList">
        <Screen name="SinglImage" component={SingleImageScreen} />

        <Screen name="ImageList" component={ImageListScreen} />
      </Navigator>
    </NavigationContainer>
  );
};


export default App;
