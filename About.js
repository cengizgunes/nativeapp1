import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import React from 'react';
import Header from './header';
export default About = ()=>{
    return (
        <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{}}>

           
           <Text>About Sayfası</Text>

           <Link
          to="/"
          underlayColor="#f0f4f7"
          style={{}}
        >
          <Text>Home</Text>
        </Link>
        </ScrollView>
      </SafeAreaView>
    </>
    )
}