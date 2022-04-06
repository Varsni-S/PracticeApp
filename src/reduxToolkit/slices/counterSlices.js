//action
import {createAction} from '@reduxjs/toolkit';
//reducers
import {createReducer} from '@reduxjs/toolkit';

//action
export const increment = createAction('increment/counterTool');
export const decrement = createAction('decrement/counterTool');
export const increaseAmount = createAction('increaseAmount/counterTool');
//reducers
//using builder

const initialState = {
  value: 0,
};

export const counterSlices = createReducer(initialState, builder => {
  builder.addCase(increment, (state, action) => {
    state.value++;
  });
  builder.addCase(decrement, (state, action) => {
    state.value--;
  });
  builder.addCase(increaseAmount, (state, action) => {
    state.value = action.payload;
  });
});

// //2.using map notation

// export const counterSlices = createReducer(initialState, {
//   [increment]: (state, action) => {
//     state.value++;
//   },
//   [decrement]: (state, action) => {
//     state.value--;
//   },
//   [increaseAmount]: (state, action) => {
//     state.value += action.payload;
//   },
// });

// import {createSlice} from '@reduxjs/toolkit';

// //initail value
// const initialState = {
//   value: 0,
// };
// export const counterSlices = createSlice({
//   name: 'countetTool',
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       state.value++;
//     },
//   },
// });

// //generate the action creators
// export const {increment} = counterSlices.actions;

//export reducers
export default counterSlices.reducer;
