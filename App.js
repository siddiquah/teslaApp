import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg1 from './assets/ModelS.jpeg'
import CarItem from './components/Caritem/index.js'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem></CarItem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
