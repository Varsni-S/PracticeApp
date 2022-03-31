import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
// import {ActivityIndicator} from 'react-native-paper';

export default function ApiCalls() {
  // const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json().then(json => setData(json.movies)))
      .catch(error => alert(error));
    //.finally(() => setLoading(false));
  });
  return (
    <View>
      <Header name="Api calls" />
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : ( */}
      <View>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => {
            return (
              <Text>
                {item.id} . {item.title} - {item.releaseYear}
              </Text>
            );
          }}
        />
      </View>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({});
