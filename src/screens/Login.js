import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setPassword} from '../redux/actions';
import {increment, decrement} from '../redux/actions';

export default function Login() {
  const {email, password, counter} = useSelector(state => state.mainReducer);

  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');

  const [userPassword, setUserPassword] = useState('');

  console.log(email, password);
  return (
    <View>
      <Header name="Login" />

      <View>
        <TextInput
          style={styles.input}
          placeholder=" Username or Email"
          onChangeText={value => setUserEmail(value)}
          //value={email}
        />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          secureTextEntry={true}
          onChangeText={value => setUserPassword(value)}
          // value={password}
        />
      </View>

      <View style={{paddingBottom: 20}}>
        <Button
          title="Log in"
          onPress={() => (
            dispatch(setEmail(userEmail)), dispatch(setPassword(userPassword))
          )}
        />
      </View>

      {/* Counter app */}
      <Button title="Counter App" />
      <View style={{flexDirection: 'row', paddingTop: 20}}>
        <TouchableHighlight
          style={{...styles.button, backgroundColor: 'limegreen'}}
          onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableHighlight>

        <Text> Counter: {counter} </Text>

        <TouchableHighlight
          style={{...styles.button, backgroundColor: 'red'}}
          onPress={() => dispatch(decrement())}>
          <Text>DECREMENT</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#888888',
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 50,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
});
