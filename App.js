import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsPage from './src/pages/EventsPage';
import EventPage from './src/pages/EventPage';
import AboutPage from './src/pages/AboutPage';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();

// NavigationContainer
// Navigator / NativeStackNavigator
// Screens: EventsPage, EventPage

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={AboutPage} />
        <Stack.Screen name={Routes.EventsPage} component={EventsPage} />
        <Stack.Screen name={Routes.EventPage} component={EventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
