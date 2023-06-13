import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AMANAH from '../../assets/Amanah_audrey.svg';


export default function OnboardingThree() {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.title}>
        <AMANAH width={220} height={80} />
      </View>
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/cash-box.png')}
          style={{ width: 300, height: 200, resizeMode:'contain' }}
        />
        <Text style={styles.welcomeTitle}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim.</Text>
        <Image
          source={require('../../assets/sliderthree.png')}
          style={{ width: 61, height: 12, marginTop: 31 }}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('ChoseLanguage' as never)}>
          <AntDesign name="arrowright" size={40} color="white" />
        </TouchableOpacity>
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
    width: '100%',
    height: '100%'
  },
  title: {
    justifyContent: 'center', 
    alignItems:'center',
    paddingTop: 35,
  },
  welcomeTitle: {
    fontSize: 27,
    lineHeight: 40,
    fontWeight: '700',
    textAlign: 'center',
    height: 80,
    width: 250,
    marginTop: 61
  },
  content: {
    textAlign: 'center', 
    paddingTop: 21
  },
  button: {
    width: 56, 
    height: 56, 
    borderRadius: 28, 
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  }
});
