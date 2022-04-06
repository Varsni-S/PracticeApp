import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../reduxToolkit/slices/counterAsyncSlice';

export default function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost);
  }, []);
  return (
    <View>
      <Text>PostList</Text>
    </View>
  );
}
