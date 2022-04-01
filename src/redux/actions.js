export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

export const setEmail = email => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setPassword = password => ({
  type: SET_USER_PASSWORD,
  payload: password,
});
