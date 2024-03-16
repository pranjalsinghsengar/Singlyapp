import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Name from  './Name';
import DateOfBirth from './DateOfBirth';
import Gender from './Gender';
import Passion from './Passion';
import Ideal from './Ideal';
import Photo from './Photo';
import Login from './Login';
import Dashboard from './Dashboard';
import Location from './Location';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="/" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="DateOfBirth" component={DateOfBirth} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Passion" component={Passion} />
      <Stack.Screen name="Ideal" component={Ideal} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
};

export default  App;