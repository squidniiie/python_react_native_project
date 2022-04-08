import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router/Router';
import React from 'react';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Router />
      <FlashMessage />
    </View>
  );
}
export default App;