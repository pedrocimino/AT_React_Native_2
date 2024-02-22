import { SafeAreaView, StyleSheet, View } from 'react-native';
import EventsPage from './src/pages/EventsPage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <EventsPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
