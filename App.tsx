import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AMANAH from './src/assets/Amanah_audrey.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/background.png')} resizeMode="cover" style={styles.image}>
      <StatusBar style="auto" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <AMANAH width={220} height={80}/>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
});
