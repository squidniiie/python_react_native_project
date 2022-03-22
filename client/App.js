import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import BottomTab from './src/router/BottomTab';

import Router from './src/router/Router';




const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Router />
    </SafeAreaView>

  );
}
export default App;