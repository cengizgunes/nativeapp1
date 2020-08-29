import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import React from 'react';
import Header from './header';
export default Home = ()=>{
    return (
        <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{}}>

           
           <Header />
           <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={{}}
        >
          <Text>About</Text>
        </Link>
        </ScrollView>
      </SafeAreaView>
    </>
    )
}