/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, safeAreaInsets]}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>12</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>1234</Text>
        <Text style={styles.text}>12345</Text>
        <Text style={styles.text}>123456</Text>
        <Text style={styles.text}>1234567</Text>
        <Text style={styles.text}>12345678</Text>
        <Text style={styles.text}>123456789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 50,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
});

export default App;
