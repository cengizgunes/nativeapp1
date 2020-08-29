import {View,Text, StyleSheet} from 'react-native';
import React from 'react';

export default Header = () => {
    return (<View>
        <Text style={styles.header}>Deneme</Text>
    </View>);
}

var styles = StyleSheet.create({
    header:{
      fontSize:30,
      textAlign: "center"
    }
  });