import {View, Text} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import ApiCalls from './src/screens/ApiCalls';

export default function App() {
  return (
    <View>
      <ApiCalls />
    </View>
  );
}
