import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notes from '../container/notes'
import AddNotes from '../container/addNotes'
import DeleteNotes from '../container/deleteNotes';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Notes'} component={Notes} />
        <Stack.Screen name={'AddNotes'} component={AddNotes} />
        <Stack.Screen name={'DeleteNotes'} component={DeleteNotes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
