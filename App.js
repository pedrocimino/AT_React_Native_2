import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './src/routes';

import EventsPage from './src/pages/EventsPage';
import AboutPage from './src/pages/AboutPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={Routes.Home} component={AboutPage} />
        <Drawer.Screen name={Routes.EventsPage} component={EventsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
