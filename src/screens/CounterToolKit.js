import {View, Text, Button} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  increaseAmount,
} from '../reduxToolkit/slices/counterSlices';

export default function CounterToolKit() {
  const dispatch = useDispatch();
  const counterTool = useSelector(state => state.counterTool);
  console.log(counterTool);
  return (
    <View>
      <Header name=" Counter ToolKit" />
      <Text> Counter : {counterTool?.value} </Text>
      <Text> Increment</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Text> Decrement</Text>
      <Button title="-" onPress={() => dispatch(decrement())} />
      <Text> Increment Amount</Text>
      <Button title="Increse amt" onPress={() => dispatch(increaseAmount())} />
    </View>
  );
}

// import {View, Text, Button} from 'react-native';
// import React from 'react';
// import Header from '../components/Header';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   increment,
//   // decrement,
//   // increaseAmount,
// } from '../reduxToolkit/slices/counterSlices';

// export default function CounterToolKit() {
//   const dispatch = useDispatch();
//   const counterTool = useSelector(state => state?.counterTool);
//   console.log(counterTool);
//   return (
//     <View>
//       <Header name=" Counter ToolKit" />
//       <Text> Counter : {counterTool?.value} </Text>
//       <Text> Increment</Text>
//       <Button title="+" onPress={() => dispatch(increment())} />
//       {/* <Text> Decrement</Text>
//       <Button title="-" onPress={() => dispatch(decrement())} />
//       <Text> Increment Amount</Text>
//       <Button
//         title="Increse amt"
//         onPress={() => dispatch(increaseAmount(20))}
//       /> */}
//     </View>
//   );
// }
