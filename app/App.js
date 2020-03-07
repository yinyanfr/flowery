/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';

import AppContext from "./AppContext"

import { Toolbar, COLOR, ThemeContext, getTheme } from 'react-native-material-ui'

import Body from './components/Body'
import Gesture from './components/Gesture'
import Tap from "./components/Tap"

// import lanscan from "./services/lanscan"
import postRequest from "./services/post"

const uiTheme = {
  palette: {
    primaryColor: "limegreen",
  }
}

const SERVER = "http://192.168.0.10:12345"
const post = (msg) => (
  postRequest(`${SERVER}/control`, {msg})
    .catch(err => {
      console.log(err)
    })
)

let timer = null

const App = () => {

  const [direction, setDirection] = useState(null)
  useEffect(() => {
    if(direction !== null){
      clearTimeout(timer)
      timer = setTimeout(() => {
        setDirection(null)
      }, 1000)
      console.log(direction)

      switch(direction){
        case "Up":
          post("w")
          break
        case "Down":
          post("s")
          break
        case "Left":
          post("a")
          break
        case "Right":
          post("d")
          break
        case "Double":
          post("j")
          break
        default:
          break
      }
    }
  }, [direction])

  return (
    <AppContext.Provider value={{ direction, setDirection }}>
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.green500} />

        <Toolbar
          centerElement="Flowery"
        />

        <Gesture>
          <Tap
            onDoubleTap={() => {
              setDirection("Double")
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
