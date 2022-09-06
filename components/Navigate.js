import React from "react";
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleImageScreen from './SingleImage';
import ImageListScreen from './ImageList';

const Stack = createNativeStackNavigator();

const Navigation = ()=>{

return(
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingleImage" children={()=><SingleImageScreen />}/>
        {/* <Stack.Screen name="ImageList" component={ImageListScreen}/> */}

      </Stack.Navigator>
    </NavigationContainer>
)
}
export default Navigation