// index.ios.js - place code for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component with JSX
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// register component and second we pass function to return component 
AppRegistry.registerComponent('albums', () => App);
