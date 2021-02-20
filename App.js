import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import HomeScreen from './src/pages/HomePage/HomePage.js'
import Perfil from './src/pages/Perfil/Perfil.js'
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
    <Perfil />
  </ApplicationProvider>
  );
}


