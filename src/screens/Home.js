import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View>
      <Button
        title="Go to Movie List"
        onPress={() => navigation.navigate('ApiCalls')}
      />
    </View>
  );
}
