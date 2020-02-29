/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

// import FitImage from "react-native-fit-image"

import { Toolbar, COLOR, ThemeContext, getTheme } from 'react-native-material-ui'

import Body from './components/Body';
import Gesture from './components/Gesture';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  }
}

const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <StatusBar barStyle="dark-content" />

      <Toolbar
        centerElement="Flowery"
      />

      <Gesture>
        <Body />
      </Gesture>

    </ThemeContext.Provider>
  );
};

export default App;
