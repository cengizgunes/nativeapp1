/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NativeRouter, Route, Link } from "react-router-native";

import Home from './Home';
import About from './About';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
       <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </NativeRouter>
    
  );
};



export default App;
