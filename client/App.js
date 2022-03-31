import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router/Router';




const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Router />
      {/* This is where we would swap out the router for the AuthNavigation */}
      <FlashMessage
        position='top'
      />
    </SafeAreaView>

  );
}
export default App;