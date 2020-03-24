import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/services/routes'

export default function App() {
  return (
    <>
    <StatusBar  barStyle="light-content" backgroundColor = "#7D40E7 " />
    <Routes />
    </>
  );
}
