import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router/Router';




const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
<<<<<<< HEAD
      <Router />
      <FlashMessage position='top'/>
=======
      <Router
      />
      <FlashMessage
        position='top'
      />
>>>>>>> 295db9a10af74dfac8bc479887fe4f329c3e7bc9
    </SafeAreaView>
  );
}
export default App;