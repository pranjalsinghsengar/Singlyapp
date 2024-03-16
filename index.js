/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { name as appName } from './app.json';
import App from './App';

const AppWithNavigation = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => AppWithNavigation);
