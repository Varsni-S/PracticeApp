import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setPassword} from '../redux/actions';

export default function Login() {
  const {email, password} = useSelector(state => state.mainReducer);
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

      <View style={styles.button}>
        <Button
          title="Log in"
          onPress={() => (
            dispatch(setEmail(userEmail)), dispatch(setPassword(userPassword))
          )}
        />
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
    width: '80%',
    margin: 30,
  },
});
