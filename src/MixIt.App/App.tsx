import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Header } from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <Header title="MixIt"></Header>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 24
  },
});
