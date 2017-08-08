// index.ios.js - place code for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component with JSX
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

// Render it to the device
// register component and second we pass function to return component 
AppRegistry.registerComponent('albums', () => App);
