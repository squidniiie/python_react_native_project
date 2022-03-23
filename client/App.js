import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router/Router';




const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Router />
      <FlashMessage position='top'/>
    </SafeAreaView>
  );
}
export default App;