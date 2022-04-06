import {configureStore} from '@reduxjs/toolkit';
//import {counterSlices} from '../slices/counterSlices';
import postReducer from '../slices/counterAsyncSlice';
const store = configureStore({
  reducer: {
    post: postReducer,
    //counter: {counterSlices},
  },
});
export default store;

// import {configureStore} from '@reduxjs/toolkit';
// //import {counterSlices} from '../slices/counterSlices';
// import counterReducer from '../slices/counterSlices';
// const store = configureStore({
//   reducer: {
//     counterTool: counterReducer,
//     //{counterSlices},
//   },
// });
// export default store;
