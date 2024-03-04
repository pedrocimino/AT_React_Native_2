import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsListPage from './src/pages/EventsListPage';
import EventPage from './src/pages/EventPage';
import AboutPage from './src/pages/AboutPage';
import Routes from './src/routes';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// NavigationContainer
// Navigator / NativeStackNavigator
// Screens: EventsListPage, EventPage

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={Routes.Home} component={AboutPage} />
        <Tabs.Screen name={Routes.EventsListPage} component={EventsListPage} />
        <Tabs.Screen name={Routes.EventPage} component={EventPage} />
      </Tabs.Navigator>
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
