//actions
//Login
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

//Counter
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//action creators
//Login
export const setEmail = email => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setPassword = password => ({
  type: SET_USER_PASSWORD,
  payload: password,
});

//counter
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
