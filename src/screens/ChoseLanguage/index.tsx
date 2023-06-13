import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import AMANAH from '../../assets/Amanah_audrey.svg';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ChoseLanguage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'English'},
    {label: 'Portuguese', value: 'Portuguese'}
  ]);

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.title}>
        <AMANAH width={220} height={80} />
      </View>
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.content}>Choose Language</Text>
        <View style={{ justifyContent: 'center' }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{ borderColor: '#AEAEAE', width: 250, height: 50 }}
          containerStyle={{ borderColor: '#AEAEAE', width: 250, height: 50 }}
        />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('Onboarding' as never)}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Continue</Text>
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
    paddingTop: 200,
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
    paddingTop: 21,
    marginBottom: 10
  },
  button: {
    width: 100, 
    height: 40,
    borderRadius: 10,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  }
});
