import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './src/screens/Onboarding';
import OnboardingTwo from './src/screens/OnboardingTwo';
import OnboardingThree from './src/screens/OnboardingThree';
import ChoseLanguage from './src/screens/ChoseLanguage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }}/>
        <Stack.Screen name="ChoseLanguage" component={ChoseLanguage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}