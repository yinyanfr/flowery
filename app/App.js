/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StatusBar,
} from 'react-native';

import AppContext from "./AppContext"

import { Toolbar, COLOR, ThemeContext, getTheme } from 'react-native-material-ui'

import Body from './components/Body';
import Gesture from './components/Gesture';
import Tap from "./components/Tap"

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  }
}

const App = () => {

  const [direction, setDirection] = useState(null)

  return (
    <AppContext.Provider value={{ direction, setDirection }}>
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <StatusBar barStyle="dark-content" />

        <Toolbar
          centerElement="Flowery"
        />

        <Gesture>
          <Tap
            onDoubleTap={() => {
              console.log("double")
            }}
          >
            <Body />
          </Tap>
        </Gesture>


      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
