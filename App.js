import {View, Text} from 'react-native';
import React from 'react';

import Login from './src/screens/Login';

import {Provider} from 'react-redux';
//import {store} from './src/redux/store'; //redux store
import {store} from './src/reduxToolkit/store/store'; //redux toolkit store
import CounterToolKit from './src/screens/CounterToolKit';

export default function App() {
  return (
    <Provider store={store}>
      <CounterToolKit />
    </Provider>
  );
}

// import {View, Text} from 'react-native';
// import React from 'react';

// import Login from './src/screens/Login';

// import {Provider} from 'react-redux';
// //import {store} from './src/redux/store'; //redux store
// import {store} from './src/reduxToolkit/store/store'; //redux toolkit store
// import CounterToolKit from './src/screens/CounterToolKit';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <CounterToolKit />
//     </Provider>
//   );
// }
